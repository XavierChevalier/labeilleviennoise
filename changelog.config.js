'use strict'
// Automatically installed in conventional-changelog.yml GitHub Workflow
// noinspection NpmUsedModulesInstalled
const config = require('conventional-changelog-conventionalcommits')

module.exports = config({
  types: [
    { type: 'feat', section: '🎉 New Features' },
    { type: 'fix', section: '🐛 Bugfixes' },
    { type: 'perf', section: '🚀 Performance Improvements' },
    { type: 'build', section: '🛠 Build System' },
    { type: 'ci', section: '🛠 Build System' },
    { type: 'refactor', section: '🪚 Refactors' },
    { type: 'docs', section: '📚 Documentation Changes' },
    { type: 'test', section: '🧪 Tests' },
    { type: 'style', section: '💎 Code Style Changes' },
    { type: 'deps', section: '🧹 Chores' },
    { type: 'chore', section: '🧹 Chores' },
    { type: 'revert', section: '🗑 Reverts' },
    { type: '*!', section: '⚠️ BREAKING CHANGES' },
    { type: 'other', section: '💚 Other Changes' },
  ],
})
