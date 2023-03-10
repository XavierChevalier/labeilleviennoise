// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('checkIfLinkIsDead', ({ link, linksCache }) => {
  if (linksCache.has(link)) {
    return
  }

  const ignoreLinks = [
    // Instagram link are not working in Cypress sometimes, but they work in the browser
    'https://www.instagram.com/',
  ]
  if (ignoreLinks.some((ignoreLink) => link.startsWith(ignoreLink))) {
    cy.log(`Ignoring link: ${link}`)
    return
  }

  cy.request({
    url: link,
    retryOnNetworkFailure: true,
  })
  cy.then(() => linksCache.add(link))
})

Cypress.Commands.add('checkIfLinksAreDead', ({ linksCache }) => {
  cy.get('a').each((link) =>
    cy.checkIfLinkIsDead({ link: link.prop('href'), linksCache })
  )
})

Cypress.Commands.add('checkIfLinksAreDeadOnPage', ({ page, linksCache }) => {
  cy.visit(page)
  cy.checkIfLinksAreDead({ linksCache })
})
