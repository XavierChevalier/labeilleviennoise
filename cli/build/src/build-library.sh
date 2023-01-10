#!/usr/bin/env sh
FILE_PATH=$(readlink -f "$0")
FILE_DIR=$(dirname "$FILE_PATH")
ROOT_DIR=$(dirname "$FILE_DIR")
BIN_NODE_MODULES_PATH="$ROOT_DIR/node_modules/.bin"

echo "Building library..."
sh "$BIN_NODE_MODULES_PATH/rimraf" dist && \
concurrently -c auto -n swc,tsc "sh $BIN_NODE_MODULES_PATH/swc src -d dist" "sh $BIN_NODE_MODULES_PATH/tsc" && \
sh "$BIN_NODE_MODULES_PATH/tsc-alias" && \
echo "Build complete"
