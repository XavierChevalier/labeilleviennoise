describe('Shop', () => {
  it('should permanent redirect /boutique to boutique.labeilleviennoise.com', () => {
    cy.visit('/boutique')
    cy.url().should('eq', `${Cypress.env('BASE_URL_SHOP')}/`)
  })

  it('should contain h1 title', () => {
    cy.visit(Cypress.env('BASE_URL_SHOP'))
    cy.get('h1').should('contain', 'Un peu de patience...')
  })
})
