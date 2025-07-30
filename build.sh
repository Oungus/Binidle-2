#! /bin/bash

mv -v docs/CNAME .
rm -rvf docs/
npm run build
mv -v build/ docs/
mv -v CNAME docs/CNAME
