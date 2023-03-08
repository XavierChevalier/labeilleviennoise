describe('Blog', () => {
  it('should permanent redirect /blog to boutique.labeilleviennoise.com/blogs/news', () => {
    cy.visit('/blog')
    cy.url().should('contain', Cypress.env('BASE_URL_BLOG'))
  })

  it('should contain title', () => {
    cy.visit(Cypress.env('BASE_URL_BLOG'))
    cy.contains('Nouvelles')
  })
})
