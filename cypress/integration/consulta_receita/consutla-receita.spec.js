/// <reference types="cypress" />

describe('Consulta cpf na receita', () => {
  beforeEach(() => {
  
    cy.visit('https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/ConsultaPublica.asp')
    cy.viewport(1366, 768)
  })

  it.only('A validação anti-robô não foi realizada corretamente. Por favor, tente novamente', () => {
    cy.gui_consulta_anti_robo_nao_foi_realizada()
    cy.contains('A validação anti-robô não foi realizada corretamente. Por favor, tente novamente.').should('be.visible') 
    
});

it.only('Realiza consulta do cpf na receita', () => {
    cy.gui_consulta_cpf()

});

it.only('Limpa campos informados', () => {
    cy.gui_limpar_campos()
    cy.contains('Preencha os campos abaixo com os dados solicitados.').should('be.visible') 
});










it('Attempt to login without e-mail', () => {
    const credentials = {
        email: ` `,
        pass: `${Cypress.env('user_password')}`,
    }
    cy.gui_login_error(credentials)
    cy.contains('Digite seu e-mail').should('be.visible')
    cy.contains('Campo obrigatório').should('be.visible')
});

it('Attempt to login without entering password', () => {
    const credentials = {
        email: `${Cypress.env('user_name')}`,
        pass: ` `,
    }
    cy.gui_login_error(credentials)
    cy.get('[name="password"]').clear()
    cy.contains('Digite sua senha').should('be.visible')
    cy.contains('Campo obrigatório').should('be.visible')
});

it('Login attempt without email and password', () => {
    cy.visit('/login')
    cy.get('button[type=submit]').click()
    cy.contains('Digite seu e-mail').should('be.visible')
    cy.contains('Digite sua senha').should('be.visible')
});

it('Login successfully', () => {
    const credentials = {
        email: `${Cypress.env('user_name')}`,
        pass: `${Cypress.env('user_password')}`,
    }
    cy.gui_login(credentials)
    cy.contains('Seja muito bem vindo(a) ao novo portal.').should('be.visible')
});

it('Logoff sucessfully', () => {
    const credentials = {
        email: `${Cypress.env('user_name')}`,
        pass: `${Cypress.env('user_password')}`,
        userLogged: `${Cypress.env('user_logged')}`,
    }
    cy.gui_logoff(credentials)
    cy.contains('Primeira vez por aqui?')
});
})
