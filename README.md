# L'Abeille Viennoise

[![Netlify Status](https://api.netlify.com/api/v1/badges/c6c2a8c9-6270-4c1d-8aef-de809f2c966e/deploy-status)](https://app.netlify.com/sites/labeilleviennoise/deploys)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

- The application is build using [Astro.build](https://astro.build/).
- [Husky](https://typicode.github.io/husky/#/) is used for each commit to check if the commit message meet the
  conventional commit format ([Commitlint](https://github.com/conventional-changelog/commitlint)) and run tests,
  linters and types checking (see `.husky/` directory for more details).

## 🚀 Project Structure

Inside this project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                           |
| :---------------------- | :----------------------------------------------- |
| `pnpm install`          | Installs dependencies                            |
| `pnpm run dev`          | Starts local dev server at `localhost:3000`      |
| `pnpm run build`        | Build your production site to `./dist/`          |
| `pnpm run preview`      | Preview your build locally, before deploying     |
| `pnpm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro --help` | Get help using the Astro CLI                     |
