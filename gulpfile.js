var gulp = require('gulp'),
	watch = require('gulp-watch'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	babel = require('gulp-babel'),
	prefixer = require('gulp-autoprefixer'),
	useref = require('gulp-useref'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-csso'),
	imagemin = require('gulp-imagemin'),
	pngquant      = require('imagemin-pngquant'),
    cache         = require('gulp-cache'),
    jade = require('gulp-jade');

var reload      = browserSync.reload;

// gulp.task('es6', function() {
// 	return gulp.src('./app/src/**/*.js')
// 		.pipe(babel({
// 			presets: ['es2015']
// 		}))
// 		.pipe(gulp.dest('./app/code/'))
// 		.pipe(browserSync.reload({
// 			stream: true
// 		}));
// });
// 


//Jade task
//

function log(error) {
    console.log([
        '',
        "----------ERROR MESSAGE START----------",
        ("[" + error.name + " in " + error.plugin + "]"),
        error.message,
        "----------ERROR MESSAGE END----------",
        ''
    ].join('\n'));
    this.end();
}

gulp.task('jade', function() {
	return gulp.src(['./app/_jadefiles/*.jade'])
	.pipe(jade( {
		pretty: true
	}).on('error', log))
	.pipe(gulp.dest('./app'));
});


//Sass compile
gulp.task('sass', function() {
	return gulp.src('./app/sass/**/*.+(scss|sass)')
		.pipe(sass().on('error', sass.logError))
		.pipe(prefixer({
				browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7']
			}))
		.pipe(gulp.dest('app/style/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('clear', function() {
    return cache.clearAll();
});


//mini img
gulp.task('img', function() {
    return gulp.src('app/img/**/*')
    .pipe(cache(imagemin({
        interlaced: true,
        progressive: true,
        pngquant: true,
		optipng: false,
		zopflipng: true,
		jpegRecompress: false,
		jpegoptim: true,
		mozjpeg: true,
		gifsicle: true,
		concurrent: 10,
        svgoPlugin: [{removeViewBox: false}],
        une: [pngquant()]
    })))
    .pipe(gulp.dest('public/img'));
});





gulp.task('build', ['img'], function() {
	return gulp.src('app/*.html')
		.pipe(useref())
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.css', minifyCss()))
		.pipe(gulp.dest('public'))
});




gulp.task('browserSync', ['sass', 'jade'], function() {
	browserSync.init({
		server: './app',
		notify: false,
		browser: false
	});
});

gulp.task('jade-rebuild', ['jade'], function() {
	browserSync.reload();
});

gulp.task('browser-reload', () => {
	browserSync.reload();
});

gulp.task('html', function(){
  gulp.src('./app/index.html')
  .pipe(reload({stream:true}));
});

gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.+(scss|sass)', ['sass']);
	gulp.watch('app/_jadefiles/**/*.jade', ['jade-rebuild']); 
	gulp.watch('app/code/**/*.js', browserSync.reload);
	// gulp.watch("app/*.html").on('change', browserSync.reload);
	// gulp.watch('./app/src/**/*.js', ['es6']);
});

gulp.task('default', ['browserSync','sass', 'jade', 'watch']);


