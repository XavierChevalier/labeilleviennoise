# [0.17.0](https://github.com/XavierChevalier/labeilleviennoise/compare/v0.16.5...v0.17.0) (2023-01-10)


### Bug Fixes

* **auth:** prisma-client import ([377fecc](https://github.com/XavierChevalier/labeilleviennoise/commit/377fecc8e42ff1ed88ff36c0376c5bedfc717ca8))
* **auth:** set permanent redirect to login ([bb466b1](https://github.com/XavierChevalier/labeilleviennoise/commit/bb466b1c8f28171f6474fdf00592edf4a77b58f5))
* **blog:** links and redirections ([f4a8b30](https://github.com/XavierChevalier/labeilleviennoise/commit/f4a8b30064bb1790102fb2859348550916b52363))
* **blog:** set build scope to blog.labeilleviennoise.com ([15ca190](https://github.com/XavierChevalier/labeilleviennoise/commit/15ca190b33bc9444b2557f2e06461d2a48288c65))
* deployment using ESBuild ([b7761d9](https://github.com/XavierChevalier/labeilleviennoise/commit/b7761d921dbbf08d107e7418f80b1108d68dbd78))
* package installation on windows ([f6b1295](https://github.com/XavierChevalier/labeilleviennoise/commit/f6b12955bc89ec3bc03d0e33bd2e6021a68ba440))


### Features

* add Sentry for error tracking and performance monitoring ([d1bdc09](https://github.com/XavierChevalier/labeilleviennoise/commit/d1bdc098f34c28ef7c30b81e8c8bd0f144a8ed46))


### Performance Improvements

* add cache for lerna scripts (build, test and prisma) ([342b0ab](https://github.com/XavierChevalier/labeilleviennoise/commit/342b0abb17814dc8fc93f406f583bf00e242dd44))
* remove useless pnpm install after each package build ([53f7e4b](https://github.com/XavierChevalier/labeilleviennoise/commit/53f7e4bc47c06c9605c282cf2066936d098e83a8))



## [0.16.5](https://github.com/XavierChevalier/labeilleviennoise/compare/v0.16.4...v0.16.5) (2022-12-24)


### Bug Fixes

* **auth:** redirectIfNotAuthenticatedLoader is not a function ([11b0975](https://github.com/XavierChevalier/labeilleviennoise/commit/11b09759a07b13156e4c4c441aafdaea60a991f8))



## [0.16.4](https://github.com/XavierChevalier/labeilleviennoise/compare/v0.16.3...v0.16.4) (2022-12-23)


### Bug Fixes

* **auth:** share session cookie between auth and website ([6d21f7d](https://github.com/XavierChevalier/labeilleviennoise/commit/6d21f7ded6520165b4a810ba4f125c18b96f4d89))



## [0.16.3](https://github.com/XavierChevalier/labeilleviennoise/compare/v0.16.2...v0.16.3) (2022-12-23)


### Bug Fixes

* **auth:** wrong base url for Google authenticator ([e4fa23b](https://github.com/XavierChevalier/labeilleviennoise/commit/e4fa23bf30bf51d18ac45c8d4ef978bd5dae3bc6))



## [0.16.2](https://github.com/XavierChevalier/labeilleviennoise/compare/v0.16.1...v0.16.2) (2022-12-23)


### Bug Fixes

* **auth:** need to specify authenticator in guard functions ([642d070](https://github.com/XavierChevalier/labeilleviennoise/commit/642d0707124cbf783a9455636b9fd12e7bc8bf1b))



