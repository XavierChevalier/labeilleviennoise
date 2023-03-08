describe('Shop', () => {
  it('should permanent redirect /boutique to boutique.labeilleviennoise.com', () => {
    cy.visit('/boutique')
    cy.url().should('contain', `${Cypress.env('BASE_URL_SHOP')}/`)
  })

  it('should contain title', () => {
    cy.visit(Cypress.env('BASE_URL_SHOP'))
    cy.contains("L'Abeille Viennoise")
  })
})
