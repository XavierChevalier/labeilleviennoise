import './commands'

interface LinksCacheOption {
  linksCache: Set<string>
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      checkIfLinkIsDead(options: { link: string } & LinksCacheOption): void
      checkIfLinksAreDead(options: LinksCacheOption): void
      checkIfLinksAreDeadOnPage(
        options: { page: string } & LinksCacheOption
      ): void
    }
  }
}
