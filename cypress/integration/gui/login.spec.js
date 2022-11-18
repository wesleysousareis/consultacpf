/// <reference types="Cypress" />

describe('Login screen validation', () => {

    it('Attempt to login with invalid user', () => {
        const credentials = {
            email: `${Cypress.env('user_name_invalid')}`,
            pass: `${Cypress.env('user_password')}`,
        }
        cy.gui_login_error(credentials)
        cy.contains('Insira um e-mail válido').should('be.visible')
    });

    it('Attempt to login with invalid password', () => {
        const credentials = {
            email: `${Cypress.env('user_name')}`,
            pass: `${Cypress.env('user_password_invalid')}`,
        }
        cy.gui_login_error(credentials)
        cy.contains('Credenciais Inválidas').should('be.visible')
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