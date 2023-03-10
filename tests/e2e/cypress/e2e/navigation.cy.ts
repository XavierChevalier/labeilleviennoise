describe('Navigation', () => {
  it('navigate between pages using navigation bar', () => {
    cy.visit('/')
    cy.title().should('eq', "L'Abeille Viennoise")

    cy.get('nav')
      .contains('Boutique')
      .should('have.attr', 'href')
      .and('eq', `${Cypress.env('BASE_URL_SHOP')}/`)

    cy.get('nav').contains('Parrainage').click()
    cy.title().should('eq', "Parrainage - L'Abeille Viennoise")

    cy.get('nav')
      .contains('Blog')
      .should('have.attr', 'href')
      .and('eq', `${Cypress.env('BASE_URL_BLOG')}/`)

    cy.get('nav')
      .contains('Contact')
      .should('have.attr', 'href')
      .and('eq', `${Cypress.env('BASE_URL_SHOP')}/pages/contact`)

    cy.get('nav').contains('Devenez parrain').click()
    cy.title().should('eq', "Parrainage - L'Abeille Viennoise")
  })

  it('"le projet" dropdown', () => {
    cy.visit('/').wait(250)

    // By default, the dropdown is not visible
    cy.contains('Le rucher').should('not.be.visible')
    cy.contains('La miellerie').should('not.be.visible')

    // Clicking on the dropdown button should show the dropdown
    cy.contains('Le projet').click()
    cy.contains('Le rucher').should('be.visible')
    cy.contains('La miellerie').should('be.visible')

    // Click outside to close
    cy.get('main').click({ force: true })
    cy.contains('Le rucher').should('not.be.visible')
    cy.contains('La miellerie').should('not.be.visible')
  })
})
