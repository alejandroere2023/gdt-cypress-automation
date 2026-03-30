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
Cypress.Commands.add('login', () => {
  cy.session('login-grandt', () => {

    cy.visit('https://testgrandt-resp.agea.com.ar/')
    cy.get('#btnLogin').click()

    cy.origin('https://staging-micuenta.clarin.com', () => {

      cy.get('#username', { timeout: 15000 })
        .click({ force: true })
        .type('test77@yopmail.com', { force: true })

      cy.contains('button', 'Continuar').click()

      cy.get('#password', { timeout: 15000 })
        .type('Testing1', { log: false })

      cy.contains('button', 'Continuar').click()
    })

  }, {
    cacheAcrossSpecs: true
  })
})

