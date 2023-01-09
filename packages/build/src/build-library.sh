#!/usr/bin/env sh
sh ../../packages/build/node_modules/.bin/rimraf dist && \
concurrently -n swc,tsc "sh ../../packages/build/node_modules/.bin/swc src -d dist" "sh ../../packages/build/node_modules/.bin/tsc" && \
sh ../../packages/build/node_modules/.bin/tsc-alias
