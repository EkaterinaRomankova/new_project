/// <reference types="cypress" />

describe('My first test', () => {
    it ('check buttion "server"', () =>{
        cy.visit('https://example.cypress.io')
        cy.get('a[href = "/cypress-api"]').contains("Server").click()
        cy.url().should('include', '/cypress-api')
    })
})