<<<<<<< HEAD
describe('Login - Flujo Principal', ()=>{
    it('El Usuario inicia sesión correctamente', ()=>{
        cy.viewport(1920, 1080)
        cy.visit('https://testgrandt-resp.agea.com.ar/');

        cy.get('#btnLogin').click()

        //cy.get('input[type="email"]').type('test77@yopmail.com')
        cy.origin('https://staging-micuenta.clarin.com', () => {

            cy.get('#username', {
                timeout: 15000
            })
            .click({ force: true })
            .type('test77@yopmail.com', { force: true })

            cy.get('button[data-action-button-primary="true"]').click()


        })

        cy.origin('https://staging-micuenta.clarin.com', () => {

            cy.url().should('include', '/u/login/password')

            cy.get('#password')
                .should('exist')
                .type('Testing1', { log: false })

            cy.contains('button', 'Continuar').click()
        })


    })
=======
describe('Login - Flujo Principal', ()=>{
    it('El Usuario inicia sesión correctamente', ()=>{
        cy.viewport(1920, 1080)
        cy.visit('https://testgrandt-resp.agea.com.ar/');

        cy.get('#btnLogin').click()

        //cy.get('input[type="email"]').type('test77@yopmail.com')
        cy.origin('https://staging-micuenta.clarin.com', () => {

            cy.get('#username', {
                timeout: 15000
            })
            .click({ force: true })
            .type('test77@yopmail.com', { force: true })

            cy.get('button[data-action-button-primary="true"]').click()


        })

        cy.origin('https://staging-micuenta.clarin.com', () => {

            cy.url().should('include', '/u/login/password')

            cy.get('#password')
                .should('exist')
                .type('Testing1', { log: false })

            cy.contains('button', 'Continuar').click()
        })


    })
>>>>>>> c7dd7cef9c7e1f6bb8bd2bc5cc0008e83a33e5c1
})