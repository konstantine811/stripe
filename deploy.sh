# Script to push website content to S3/Cloudfront
# You need to have loaded the AWS keys as environment variables before
# running this script

BUCKET=s3://ixlayer.com-new
DISTRIBUTION_ID=E3857AR2FW9R6A

# change all the html extensions
find app -name "*.html" -d 1 | xargs  sed -i '' -e 's|href="\(.*\).html"|href="\1"|g'

aws s3 sync app/ $BUCKET
aws s3 cp app/contact-us.html $BUCKET/contact-us --content-type "text/html"
aws s3 cp app/about-us.html $BUCKET/about-us --content-type "text/html"
aws s3 cp app/ix360.html $BUCKET/ix360 --content-type "text/html"
aws s3 cp app/ixanypoint.html $BUCKET/ixanypoint --content-type "text/html"
aws s3 cp app/sign-in.html $BUCKET/sign-in --content-type "text/html"

aws cloudfront create-invalidation --paths '/*' --distribution-id $DISTRIBUTION_ID 
