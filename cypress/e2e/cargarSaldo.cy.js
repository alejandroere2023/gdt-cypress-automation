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


        // Espera a que aparezca el popup
        cy.contains('Recibí nuestras notificaciones', { timeout: 15000 })
        .should('be.visible')

        // Cierra el popup
        cy.contains('NO, GRACIAS')
        .should('be.visible')
        .click()
    
        cy.get('[href="/mi-cuenta"]').click();

        cy.get('.space-x-3 > :nth-child(1)').click();

        //Selecciona importe a pagar
        cy.contains('Importe')
            .parent()
            .find('button')
            .click()

        cy.get('[role="option"]')
            .contains('2.000')
            .click()

         cy.contains('Continuar')
        .should('be.visible')
        .click();

        //Selecciona metodo de pago
        cy.contains('Tarjeta de crédito o débito', { timeout: 10000 })
        .should('be.visible')
        .click()
        
        cy.contains('Continuar')
        .should('be.visible')
        .click();

       
// ===== SELECCIONAR VISA CRÉDITO (HEADLESSUI REAL) =====

        // cy.contains('button', 'Visa Crédito')
        // .trigger('pointerdown', { force: true })
        // .trigger('mousedown', { force: true })
        // .trigger('mouseup', { force: true })
        // .click({ force: true })

        // // esperar a que el state interno se actualice
        // cy.wait(800)

        // // ===== CONTINUAR (SIN ASSERTS) =====

        // cy.contains('button', 'Continuar')
        // .trigger('pointerdown', { force: true })
        // .trigger('mousedown', { force: true })
        // .trigger('mouseup', { force: true })
        // .click({ force: true })

        // ===== MODAL TARJETAS =====

// Click REAL sobre el radio de Visa Crédito
cy.contains('[role="radio"]', 'Visa Crédito', { timeout: 10000 })
  .should('be.visible')
  .click()

// Assert CLAVE: el radio quedó seleccionado
cy.contains('[role="radio"]', 'Visa Crédito')
  .should('have.attr', 'aria-checked', 'true')

// Esperar a que HeadlessUI habilite el botón
cy.contains('button', 'Continuar')
  .should('be.enabled')
  .click()
        
    })
})