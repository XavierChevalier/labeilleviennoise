'use strict'
// Automatically installed in conventional-changelog.yml GitHub Workflow
// noinspection NpmUsedModulesInstalled
const config = require('conventional-changelog-conventionalcommits')

module.exports = config({
  types: [
    { type: 'feat', section: '๐ New Features' },
    { type: 'fix', section: '๐ Bugfixes' },
    { type: 'perf', section: '๐ Performance Improvements' },
    { type: 'build', section: '๐  Build System' },
    { type: 'ci', section: '๐  Build System' },
    { type: 'refactor', section: '๐ช Refactors' },
    { type: 'docs', section: '๐ Documentation Changes' },
    { type: 'test', section: '๐งช Tests' },
    { type: 'style', section: '๐ Code Style Changes' },
    { type: 'deps', section: '๐งน Chores' },
    { type: 'chore', section: '๐งน Chores' },
    { type: 'revert', section: '๐ Reverts' },
    { type: '*!', section: 'โ ๏ธ BREAKING CHANGES' },
    { type: 'other', section: '๐ Other Changes' },
  ],
})
