#!/bin/bash
if [ "$CI" == "true" ]
then
    echo "CI environment detected, skipping root-prepare.sh"
else
    concurrently -n husky,build "husky install" "pnpm build:packages"
fi
