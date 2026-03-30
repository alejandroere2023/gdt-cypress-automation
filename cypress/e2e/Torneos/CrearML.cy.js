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
    
        //Selecciona Torneos
        cy.contains('button', 'Torneos')
            .should('be.visible')
            .click()
        cy.wait(2000)            


        //Selecciona ML
        cy.contains('Miniligas', { timeout: 10000 })
        .should('be.visible')
        .click({ force: true })
        cy.wait(2000)


        //Es llevado al Home de ML y selecciona Crear ML
        cy.contains('button', 'Crear nuevo torneo').click();
        cy.wait(2000)

        //selecciona campo nombre y escribe nombre del TDA
        cy.get('#tourneyName', {timeout: 15000})
            .click({ force: true })
            .type('TDA Automation 3', { force: true })
        cy.wait(2000)

        //Selecciona CRear el TDA
        cy.contains('button', 'Crear nuevo torneo').click();
        cy.wait(2000)

        //Invitar Mas tarde
        cy.contains('button', 'Invitar más tarde').click();
        cy.wait(2000)


        

       
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
    
        //Selecciona Torneos
        cy.contains('button', 'Torneos')
            .should('be.visible')
            .click()
        cy.wait(2000)            


        //Selecciona ML
        cy.contains('Miniligas', { timeout: 10000 })
        .should('be.visible')
        .click({ force: true })
        cy.wait(2000)


        //Es llevado al Home de ML y selecciona Crear ML
        cy.contains('button', 'Crear nuevo torneo').click();
        cy.wait(2000)

        //selecciona campo nombre y escribe nombre del TDA
        cy.get('#tourneyName', {timeout: 15000})
            .click({ force: true })
            .type('TDA Automation 3', { force: true })
        cy.wait(2000)

        //Selecciona CRear el TDA
        cy.contains('button', 'Crear nuevo torneo').click();
        cy.wait(2000)

        //Invitar Mas tarde
        cy.contains('button', 'Invitar más tarde').click();
        cy.wait(2000)


        

       
>>>>>>> c7dd7cef9c7e1f6bb8bd2bc5cc0008e83a33e5c1
    })