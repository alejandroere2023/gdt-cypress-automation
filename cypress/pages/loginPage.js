class LoginPage {

  visitHome() {
    cy.visit('https://testgrandt-resp.agea.com.ar/')
  }

  clickLoginButton() {
    cy.get('#btnLogin').click()
  }

  loginWithEmail(email) {
    cy.origin(
      'https://staging-micuenta.clarin.com',
      { args: { email } },
      ({ email }) => {

        cy.get('#username', { timeout: 15000 })
          .click({ force: true })
          .type(email, { force: true })

        cy.get('button[data-action-button-primary="true"]').click()
      }
    )
  }

  loginWithPassword(password) {
    cy.origin(
      'https://staging-micuenta.clarin.com',
      { args: { password } },
      ({ password }) => {

        cy.get('#password', { timeout: 15000 })
          .type(password, { log: false })

        cy.contains('button', 'Continuar').click()
      }
    )
  }
}

export default new LoginPage()