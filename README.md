# L'Abeille Viennoise

[![Netlify Status](https://api.netlify.com/api/v1/badges/c6c2a8c9-6270-4c1d-8aef-de809f2c966e/deploy-status)](https://app.netlify.com/sites/labeilleviennoise/deploys)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Getting started

The application is build using [Remix.run](https://remix.run/).

[Husky](https://typicode.github.io/husky/#/) is used for each commit to check if the commit message meet the
conventional commit format ([Commitlint](https://github.com/conventional-changelog/commitlint)) and run tests,
linters and types checking (see `.husky/` directory for more details).

### Images

All image are stored in https://imagekit.io/ and can be managed in the
[ImageKit dashboard](https://imagekit.io/dashboard/media-library).

### Google Console for OAuth (login with Google)

The application use Google OAuth to allow users to log in with their Google account to manage the blog.
Please, follow the [Google Console dashboard](https://console.cloud.google.com/apis/dashboard?authuser=1&project=labeille-viennoise).
