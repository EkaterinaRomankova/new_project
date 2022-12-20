/// <reference types="cypress" />

describe('My first test', () => {

    it ('check buttion "server"', () =>{
        cy.visit('https://example.cypress.io')
        cy.get('a[href = "/cypress-api"]').contains("Serve").click()
        cy.url().should('include', '/cypress-api')
    })
})

describe('second test', () => {

    it('click "nextAll" navigates to a new url', () =>{
        cy.visit('https://example.cypress.io')
        cy.contains('nextAll').click()
        cy.url().should('include', '/commands/traversal')
    })  
})