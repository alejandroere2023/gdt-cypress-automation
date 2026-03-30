<<<<<<< HEAD
    //------------------------------Transferir Delantero Mayor Puntaje------------------------------

        it('Transferencia Volamte', ()=>{
        cy.viewport(1920, 1080)
        cy.visit('https://testgrandt-resp.agea.com.ar/');

        cy.get('#btnLogin').click()

        //cy.get('input[type="email"]').type('test77@yopmail.com')
        cy.origin('https://staging-micuenta.clarin.com', () => {

            cy.get('#username', {timeout: 15000})
            .click({ force: true })
            .type('test80@yopmail.com', { force: true })

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
    
        //Cerrar Mascara

        cy.get('[href="/mi-equipo/futbol-5"]').click();
        //cy.get('.bg-gdt-blue-header > .flex > span').click();
        //cy.get('.bg-gdt-blue-header > .flex > span').click();
        //cy.get('.bg-gdt-blue-header > .flex > span').click();

        //Selecciona Arquero
        cy.get('#refPlayerField-2 > .h-15',  {timeout: 15000}).click();
        cy.wait(2000)
        //Selecciona Transferir en el Pop
        cy.get('.max-h-11 > :nth-child(3)',  {timeout: 15000}).click();
        cy.wait(2000)


        //Selecciona Promedio
        cy.get(':nth-child(2) > .text-3xs > .flex').click();
        cy.wait(2000)
        //Selecciona Jugador con prom Max
        cy.get('[style="position: absolute; top: 0px; left: 0px; width: 100%; height: 91px;"] > .justify-between').click();
        cy.wait(2000)
        //Confirma
        cy.get('.mb-6 > .mt-8 > .relative',  {timeout: 15000}).click();
        cy.wait(3000)
=======
    //------------------------------Transferir Delantero Mayor Puntaje------------------------------

        it('Transferencia Volamte', ()=>{
        cy.viewport(1920, 1080)
        cy.visit('https://testgrandt-resp.agea.com.ar/');

        cy.get('#btnLogin').click()

        //cy.get('input[type="email"]').type('test77@yopmail.com')
        cy.origin('https://staging-micuenta.clarin.com', () => {

            cy.get('#username', {timeout: 15000})
            .click({ force: true })
            .type('test80@yopmail.com', { force: true })

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
    
        //Cerrar Mascara

        cy.get('[href="/mi-equipo/futbol-5"]').click();
        //cy.get('.bg-gdt-blue-header > .flex > span').click();
        //cy.get('.bg-gdt-blue-header > .flex > span').click();
        //cy.get('.bg-gdt-blue-header > .flex > span').click();

        //Selecciona Arquero
        cy.get('#refPlayerField-2 > .h-15',  {timeout: 15000}).click();
        cy.wait(2000)
        //Selecciona Transferir en el Pop
        cy.get('.max-h-11 > :nth-child(3)',  {timeout: 15000}).click();
        cy.wait(2000)


        //Selecciona Promedio
        cy.get(':nth-child(2) > .text-3xs > .flex').click();
        cy.wait(2000)
        //Selecciona Jugador con prom Max
        cy.get('[style="position: absolute; top: 0px; left: 0px; width: 100%; height: 91px;"] > .justify-between').click();
        cy.wait(2000)
        //Confirma
        cy.get('.mb-6 > .mt-8 > .relative',  {timeout: 15000}).click();
        cy.wait(3000)
>>>>>>> c7dd7cef9c7e1f6bb8bd2bc5cc0008e83a33e5c1
    })