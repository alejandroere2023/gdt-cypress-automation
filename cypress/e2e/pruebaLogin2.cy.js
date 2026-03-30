<<<<<<< HEAD
import loginPage from '../pages/loginPage'

describe('Login - Flujo Principal', () => {

  beforeEach(() => {
    cy.session('login-grandt', () => {
      loginPage.visitHome()
      loginPage.clickLoginButton()
      loginPage.loginWithEmail('test77@yopmail.com')
      loginPage.loginWithPassword('Testing1')
    })
  })

  it('El usuario accede al sistema', () => {
    cy.visit('https://testgrandt-resp.agea.com.ar/')
    cy.url().should('not.include', 'login')
  })

=======
import loginPage from '../pages/loginPage'

describe('Login - Flujo Principal', () => {

  beforeEach(() => {
    cy.session('login-grandt', () => {
      loginPage.visitHome()
      loginPage.clickLoginButton()
      loginPage.loginWithEmail('test77@yopmail.com')
      loginPage.loginWithPassword('Testing1')
    })
  })

  it('El usuario accede al sistema', () => {
    cy.visit('https://testgrandt-resp.agea.com.ar/')
    cy.url().should('not.include', 'login')
  })

>>>>>>> c7dd7cef9c7e1f6bb8bd2bc5cc0008e83a33e5c1
})