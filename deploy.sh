find app -name "*.html" -d 1 | xargs  sed -i '' -e 's|href="\(.*\).html"|href="\1"|g'

aws s3 sync app/ s3://ixlayer.com-new/
aws s3 cp app/contact-us.html s3://ixlayer.com-new/contact-us --content-type "text/html"
aws s3 cp app/about-us.html s3://ixlayer.com-new/about-us --content-type "text/html"
aws s3 cp app/ix360.html s3://ixlayer.com-new/ix360 --content-type "text/html"
aws s3 cp app/ixAnypoint.html s3://ixlayer.com-new/ixAnypoint --content-type "text/html"
aws s3 cp app/sign-in.html s3://ixlayer.com-new/sign-in --content-type "text/html"
