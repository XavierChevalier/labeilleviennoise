#!/usr/bin/env sh
./../../packages/build/node_modules/.bin/rimraf dist && \
concurrently -n swc,tsc "./../../packages/build/node_modules/.bin/swc src -d dist" "./../../packages/build/node_modules/.bin/tsc" && \
./../../packages/build/node_modules/.bin/tsc-alias
