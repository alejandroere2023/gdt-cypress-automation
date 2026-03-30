describe('Login - Flujo Principal', () => {

  it('Registrar Usuario desde 0', () => {

    Cypress.on('uncaught:exception', () => false)

    cy.viewport(1920, 1080)

    //YOPMAIL
     cy.visit('https://yopmail.com/es/')

     cy.get('#login', { timeout: 15000 })
       .click({ force: true })
       .type('Auto42@yopmail.com', { force: true })//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

     cy.get('#refreshbut > .md > .material-icons-outlined').click()

    //GRANDT (PRIMER SALTO)
    cy.origin('https://testgrandt-resp.agea.com.ar', () => {
      cy.visit('/')
      cy.get('#btnRegister').click()
    })

    // Ingresar email
    cy.origin('https://staging-micuenta.clarin.com', () => {

      cy.get('#email')
        .should('be.visible')
        .type('Auto42@yopmail.com')//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

      cy.get('button[data-action-button-primary="true"]').click()

      cy.url().should('include', '/u/signup/password')

      //Ingresar Pass
      cy.get('#password')
        .should('be.visible')
        .type('Testing1', { log: false })

      cy.contains('button', 'Continuar').click()
    })

    //CLAVE: VOLVER A GRANDT CON ORIGIN
    cy.origin('https://testgrandt-resp.agea.com.ar', () => {

      cy.url({ timeout: 20000 }).should('include', '/registracion')

      cy.get('#name', { timeout: 20000 })
        .should('be.visible')
        .click({ force: true })
        .type('ByAlejandro', { delay: 50 })

      cy.get('#lastName')
        .should('be.visible')
        .type('AutoCypress', { delay: 50 })

      //DOCUMENTO ARGENTINO (radio)
      cy.contains('span', 'Tengo documento argentino')
        .click({ force: true })

      //TIPO DOC (DNI ya viene seleccionado, pero por las dudas)
      cy.get('[id^="headlessui-listbox-button"]')
        .first()
        .click()

      cy.contains('DNI').click({ force: true })

      //NUMERO DOC
      cy.get('#docNumber')
        .should('be.visible')
        .type('33333042')//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

      //FECHA NACIMIENTO 
      //ABRIR DATEPICKER
      cy.get('#birthDate')
        .should('be.visible')
        .click()

      //ESPERAR QUE APAREZCA
      cy.get('.react-datepicker')
        .should('be.visible')

      //SETEAR AÑO
      cy.get('.react-datepicker__year-select')
        .select('1990')

      //SETEAR MES (usar número evita idioma)
      cy.get('.react-datepicker__month-select')
        .select('9') // 0=enero → 9=octubre

      //SELECCIONAR DÍA REAL (evita días duplicados)
      cy.get('.react-datepicker__day--010:not(.react-datepicker__day--outside-month)')
        .click()
      //GENERO
      cy.contains('span', 'Hombre')
        .click({ force: true })

      //CLUB (dropdown headlessui)
      cy.get('[id^="headlessui-listbox-button"]')
        .eq(1)
        .click()

      cy.contains('Boca') // podés cambiar por cualquiera
        .click({ force: true })

      //CHECK TERMINOS (solo si NO está marcado)
      cy.get('[id^="termsConditions"]')
        .then($el => {
          if ($el.attr('aria-checked') === 'false') {
            cy.wrap($el).click({ force: true })
          }
        })

      //CHECK NOTIFICACIONES (opcional)
      cy.get('[id^="getNotifications"]')
        .then($el => {
          if ($el.attr('aria-checked') === 'false') {
            cy.wrap($el).click({ force: true })
          }
        })

      //SUBMIT
      cy.contains('button', 'Continuar')
        .click()

    })

    cy.origin('https://testgrandt-resp.agea.com.ar', () => {

    cy.url({ timeout: 20000 })
      .should('include', '/registracion/nombre-de-equipo')

    cy.get('#nameTeam', { timeout: 20000 })
      .should('be.visible')
      .click()
      .type('Auto 42 FC', { delay: 50 })//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    cy.contains('button', 'Continuar')
      .click()

  })

  //1er slide
   cy.origin('https://testgrandt-resp.agea.com.ar',()=>{
    cy.url({ timeout: 20000 })
      .should('include', '/bienvenida')
    
    cy.contains('button', 'Continuar')
      .click()
  })

  //2do slide
  cy.origin('https://testgrandt-resp.agea.com.ar',()=>{
    cy.url({ timeout: 20000 })
      .should('include', '/bienvenida')
    
    cy.contains('button', 'Continuar')
      .click()
  })
 

  cy.origin('https://testgrandt-resp.agea.com.ar',()=>{
    cy.url({ timeout: 20000 })
      .should('include', '/armado/futbol-11')
 
   //Cerrar Mascara
        //cy.get('[href="/armado/futbol-11"]').click();
        cy.get('.bg-gdt-blue-header > .flex > span').click();
        cy.get('.bg-gdt-blue-header > .flex > span').click();
        cy.get('.bg-gdt-blue-header > .flex > span').click();


//--------------------ARMADO DE EQUIPO  4-4-2  ----------------------------------------------------------------
        //Selecciona Arquero
        cy.get('#refPlayerField-1 > .h-15',  {timeout: 15000}).click();
        cy.wait(2000)

        //Selecciona Mejor Promedio
        cy.get(':nth-child(2) > .text-3xs > .flex').click();
        cy.wait(2000)
        //Selecciona Jugador con prom Max
        cy.get('[style="position: absolute; top: 0px; left: 0px; width: 100%; height: 91px;"] > .justify-between').click();
        cy.wait(2000)
        //Confirma
        cy.get('.mb-6 > .mt-8 > .relative',  {timeout: 15000}).click();
        cy.wait(3000)


        //Selecciona Defensor 1
        cy.get('#refPlayerField-2 > .h-15',  {timeout: 15000}).click();
        cy.wait(2000)

        //Selecciona Mejor Promedio
        cy.get(':nth-child(2) > .text-3xs > .flex').click();
        cy.wait(2000)
        //Selecciona Jugador con prom Max
        cy.get('[style="position: absolute; top: 0px; left: 0px; width: 100%; height: 91px;"] > .justify-between').click();
        cy.wait(2000)
        //Confirma
        cy.get('.mb-6 > .mt-8 > .relative',  {timeout: 15000}).click();
        cy.wait(3000)

    })

  })
})