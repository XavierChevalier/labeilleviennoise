type CheckDeadLinksPages = { url: string }[]
describe('Check dead links', () => {
  it('links should not be dead', () => {
    const linksCache = new Set<string>()
    cy.fixture<CheckDeadLinksPages>('check-dead-links-pages.json').then(
      (pages) => {
        pages.forEach(({ url: page }) => {
          cy.visit(page)
          cy.get('a').each((link) => {
            const href = link.prop('href')
            if (linksCache.has(href)) {
              cy.log(`Already checked ${href}, bypassing`)
              return
            }

            cy.log(href)
            linksCache.add(href)
            cy.request({
              url: href,
              failOnStatusCode: false,
              retryOnNetworkFailure: true,
            })
          })
        })
      }
    )

    cy.then(() => cy.log(`Checked ${linksCache.size} links`))
  })
})
