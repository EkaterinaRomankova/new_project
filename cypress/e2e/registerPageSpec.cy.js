/// <reference types="cypress" />

import RegisterPage from "../pageObject/RegisterPage"
import CreateBookingPage from "../pageObject/CreateBookingPage"
import Header from "../pageObject/header"

const registerPage = new RegisterPage()
const createBookingPage = new CreateBookingPage()
const header = new Header()

describe('register page tests suite', () => {
    beforeEach(function(){
        cy.fixture('registerPage').then(data => {
            this.data = data
        })
        cy.visit('/')
    })

    xit('verify that english icon languge clickable and change language', function() {
        registerPage.clickOnEnglishIconLan()

        registerPage.elements.getButtonLogin().should('include.text', this.data.loginTextEN)   
    })

    xit('verify that russian icon languge clickable and change language', function() {
        registerPage.clickOnRussianIconLan()

        registerPage.elements.getButtonLogin().should('include.text', this.data.loginTextRU)  
    })

    xit('verify that thailand icon languge clickable and change language', function() {
        registerPage.clickOnThailandIconLan()

        registerPage.elements.getButtonLogin().should('include.text', this.data.loginTextTH)     
    })
})


