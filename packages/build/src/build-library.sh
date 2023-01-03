#!/usr/bin/env bash
rimraf dist && concurrently -n swc,tsc "swc src -d dist" "tsc" && tsc-alias
