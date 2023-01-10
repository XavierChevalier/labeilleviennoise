describe('Navigation', () => {
  const goToUsingNavLink = (page: string) =>
    cy.get('nav').contains(page).click()
  const titleShouldBe = (title: string) => cy.title().should('eq', title)

  it('navigate between pages using navigation bar', () => {
    cy.visit('/')
    titleShouldBe("L'Abeille Viennoise")

    goToUsingNavLink('Boutique')
    titleShouldBe("La boutique - L'Abeille Viennoise")

    goToUsingNavLink('Parrainage')
    titleShouldBe("Parrainage - L'Abeille Viennoise")

    goToUsingNavLink('Blog')
    titleShouldBe("Blog - L'Abeille Viennoise")
    cy.url().should('eq', `${Cypress.env('BASE_URL_BLOG')}/`)

    goToUsingNavLink('Contact')
    titleShouldBe("Contact - L'Abeille Viennoise")

    goToUsingNavLink('Devenez parrain')
    titleShouldBe("Parrainage - L'Abeille Viennoise")
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
