#!/bin/sh

cd ../
WORKING_DIR=`pwd`
INSTALL_DIR=`echo "$TMPDIR"graphpaper`
TEST_SCRIPT=`echo "$WORKING_DIR"/scripts/require-test.js`

if [ -d "$INSTALL_DIR" ]; then
  rm -rf $INSTALL_DIR
fi

mkdir $INSTALL_DIR
cd $WORKING_DIR
npm pack
mv graphpaper.js-*.tgz $INSTALL_DIR
cd $INSTALL_DIR
tar -tf graphpaper.js-*.tgz
npm install graphpaper.js-*.tgz
node -p "require('graphpaper.js');"

if [ -d "$INSTALL_DIR" ]; then
  rm -rf $INSTALL_DIR
fi
