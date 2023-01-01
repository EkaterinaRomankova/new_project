/// <reference types="cypress" />

import RegisterPage from "../pageObject/RegisterPage"
import CreateBookingPage from "../pageObject/CreateBookingPage"
import Header from "../pageObject/header"

const registerPage = new RegisterPage()
const createBookingPage = new CreateBookingPage()
const header = new Header()

describe('sign in spec', () => {
    beforeEach(function(){
        cy.fixture('registerPage').then(data => {
            this.data = data
        })
        cy.visit('/')
    })

    xit('user is able to log in', function() {
        registerPage.clickOnButtonLogin()
        cy.logIn(this.data.email, this.data.password)
        cy.wait(9000)
        createBookingPage.elements.getTitleOnThePage().should('include.text', 'Create bookin')      
    })  

    xit('user is able to log out', function() {
        registerPage.clickOnButtonLogin()
        cy.logIn(this.data.email, this.data.password)
        cy.wait(9000)
        header.clickOnAgentMenu()
        header.clickOnLogOut()
        registerPage.elements.getLogo().should('be.visible')
    })
})    
