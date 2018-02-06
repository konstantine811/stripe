
*ixLayer Website*

To setup:

- Install nvm
   nvm https://github.com/creationix/nvm
- Install node v7
   nvm install v7.0.0
- Use node v7
   nvm use v7.0.0
- Install NPM packages
   npm install
- Install gulp
   npm install --global gulp-cli 
  
To build:
- gulp

To push to S3:
- install boto
  pip install boto
- setup your AWS Keys
  export AWS_ACCESS_KEY_ID=your access key
  export AWS_SECRET_ACCESS_KEY=your secret access key
- Push to AWS
  sh deploy.sh

