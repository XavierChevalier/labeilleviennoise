interface Entrypoint {
  url: string
  origin?: string
}

describe('Check dead links', () => {
  const linksCache = new Set<string>()

  it('links should not be dead on website', () => {
    cy.fixture<Entrypoint[]>('check-dead-links-website-entrypoint.json').then(
      (entries) => {
        entries.forEach(({ url: page }) =>
          cy.checkIfLinksAreDeadOnPage({ page, linksCache })
        )
      }
    )

    cy.then(() => cy.log(`Checked ${linksCache.size} links`))
  })

  it('links should not be dead on blog posts', () => {
    cy.visit(Cypress.env('BASE_URL_BLOG'))

    cy.get('.card__inner a[href^="/blogs/news/"]').as('blogPosts')
    cy.get('@blogPosts').then((links) =>
      cy.log(`Found ${links.length} blog posts`, links.toArray().join('\n'))
    )

    cy.get('@blogPosts').each((link) =>
      cy.checkIfLinksAreDeadOnPage({ page: link.prop('href'), linksCache })
    )

    cy.then(() => cy.log(`Checked ${linksCache.size} links`))
  })
})
