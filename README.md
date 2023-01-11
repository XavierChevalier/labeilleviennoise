# L'Abeille Viennoise

[![Netlify Status](https://img.shields.io/netlify/c6c2a8c9-6270-4c1d-8aef-de809f2c966e?label=Netlify%20Website&logo=netlify)](https://app.netlify.com/sites/labeilleviennoise/deploys)
[![Netlify Status](https://img.shields.io/netlify/76fc38f8-5187-4d37-a400-eea0c35ef261?label=Netlify%20Auth&logo=netlify)](https://app.netlify.com/sites/auth-labeilleviennoise/deploys)
[![Netlify Status](https://img.shields.io/netlify/630cae83-ef6e-4389-aac4-d96890077acc?label=Netlify%20Blog&logo=netlify)](https://app.netlify.com/sites/blog-labeilleviennoise/deploys)
[![Netlify Status](https://img.shields.io/netlify/5e7a8e6a-cf87-4a79-9101-10f798bc3d96?label=Netlify%20Shop&logo=Netlify)](https://app.netlify.com/sites/boutique-labeilleviennoise/deploys)

[![Cypress Status](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/simple/6ps5vm&style=flat&logo=cypress)](https://cloud.cypress.io/projects/6ps5vm/runs)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Getting started

The application is build using [Remix.run](https://remix.run/).

[Husky](https://typicode.github.io/husky/#/) is used for each commit to check if the commit message meet the
conventional commit format ([Commitlint](https://github.com/conventional-changelog/commitlint)) and run tests,
linters and types checking (see `.husky/` directory for more details).

### Netlify

The application is deployed on [Netlify](https://www.netlify.com/).

### Images

All image are stored in https://imagekit.io/ and can be managed in the
[ImageKit dashboard](https://imagekit.io/dashboard/media-library).

### Google Console for OAuth (login with Google)

The application use Google OAuth to allow users to log in with their Google account to manage the blog.
Please, follow the [Google Console dashboard](https://console.cloud.google.com/apis/dashboard?authuser=1&project=labeille-viennoise).

### Cypress dashboard

The application use [Cypress](https://www.cypress.io/) for end-to-end testing.
The tests are run on [Cypress dashboard](https://cloud.cypress.io/projects/6ps5vm/runs).

## Environment variables

How to add or update environment variables:

- For Netlify, go to the [Netlify dashboard](https://app.netlify.com/sites/labeilleviennoise/settings/deploys#environment).
- For GitHub Actions, go to the [GitHub Actions dashboard](https://github.com/XavierChevalier/labeilleviennoise/settings/environments).
  - Also update the `env` section in `.github/workflows/e2e-tests.yml` file to take in account the GitHub secrets.
- For local development, create a `.env` file at the root of `apps/[project]`.
