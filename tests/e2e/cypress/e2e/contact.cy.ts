describe('Contact', () => {
  it('should permanent redirect /contact to boutique.labeilleviennoise.com/pages/contact', () => {
    cy.visit('/contact')
    cy.url().should('contain', `${Cypress.env('BASE_URL_SHOP')}/pages/contact`)
  })

  it('should contain title', () => {
    cy.visit(Cypress.env('BASE_URL_SHOP'))
    cy.contains('Contactez-nous')
  })
})
