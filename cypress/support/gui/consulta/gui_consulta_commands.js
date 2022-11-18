/// <reference types="Cypress" />

Cypress.Commands.add('gui_consulta_anti_robo_nao_foi_realizada', credentials => {
   cy.intercept({ method: 'GET', pathname: '**/consulta', }).as('getLoginPage')
   cy.get('input[name="txtCPF"]').should('be.visible').type('08203001360')
   cy.get('input[name="txtDataNascimento"]').should('be.visible').type('27122001')
   cy.get('#id_submit').click()
})

Cypress.Commands.add('gui_consulta_cpf', credentials => {
    cy.intercept({ method: 'GET', pathname: '**/consulta', }).as('getLoginPage')
    cy.get('input[name="txtCPF"]').should('be.visible').type('08203001360')
    cy.get('input[name="txtDataNascimento"]').should('be.visible').type('27122001')
    cy.get('#id_submit').click()

})

Cypress.Commands.add('gui_limpar_campos', credentials => {
    cy.intercept({ method: 'GET', pathname: '**/consulta', }).as('getLoginPage')
    cy.get('input[name="txtCPF"]').should('be.visible').type('08203001360')
    cy.get('input[name="txtDataNascimento"]').should('be.visible').type('27122001')
    cy.get('#id_clear').click()

    
})

Cypress.Commands.add('gui__campos', credentials => {
    cy.intercept({ method: 'GET', pathname: '**/consulta', }).as('getLoginPage')
    cy.get('input[name="txtCPF"]').should('be.visible').type('08203001360')
    cy.get('input[name="txtDataNascimento"]').should('be.visible').type('27122001')
    cy.get('#id_clear').click()

    
})
