/// <reference types="cypress" />

import RegisterPage from "../pageObject/RegisterPage"
import CreateBookingPage from "../pageObject/CreateBookingPage"
import Header from "../pageObject/header"
import HelpDescPage from "../pageObject/HelpDescPage"

const registerPage = new RegisterPage()
const createBookingPage = new CreateBookingPage()
const header = new Header()
const helpDesc = new HelpDescPage()

describe('create booking page', () => {
    beforeEach(function(){
        cy.fixture('registerPage').then(data => {
            this.data = data
        })
        cy.visit('/')
    })

    xit('check url of help desc page', function() {
        registerPage.clickOnButtonLogin()
        cy.logIn(this.data.email, this.data.password)
        cy.wait(9000)
        header.clickOnHelpDescIcon()
        cy.url().should('contain', this.data.heplDescUrl)      
    })

    xit('check select menu on help desc page', function() {
        registerPage.clickOnButtonLogin()
        cy.logIn(this.data.email, this.data.password)
        cy.wait(9000)
        header.clickOnHelpDescIcon()
        helpDesc.elements.getSelectMenu().select(this.data.selectAllStatuses)
        helpDesc.elements.getSelectMenu().select(this.data.selectActive)
        helpDesc.elements.getAllActiveStatuses().each(($el) => {
            expect($el.text()).to.include(this.data.selectActive)
        })
        helpDesc.elements.getSelectMenu().select(this.data.selectClosed)
    })

    xit('create new request on help desc page', function() {
        registerPage.clickOnButtonLogin()
        cy.logIn(this.data.email, this.data.password)
        cy.wait(9000)
        header.clickOnHelpDescIcon()
        helpDesc.clickOnNewRequest()
        helpDesc.elements.getTitleOfNewRequest().should('be.visible').and('have.text', this.data.titleOnNewRequest)
        helpDesc.elements.getTitleMessage().type(this.data.titleMessage)
        helpDesc.elements.getMessage().type(this.data.message)
        helpDesc.clickOnButtonSend()
        helpDesc.clickOnCloseWindow()
        helpDesc.elements.getListOfTopics().filter(':contains("ActiveNew rule")').first().click() //working
    })

    xit('create new request on help desc page', function() {
        registerPage.clickOnButtonLogin()
        cy.logIn(this.data.email, this.data.password)
        cy.wait(9000)
        header.clickOnHelpDescIcon()
        helpDesc.elements.getListOfTopics().then(($el) => {
            // if(("ActiveNew rule").includes($el.text())){
            //     cy.wrap($el).click()
                console.log($el.text());
          //  }
       })
    })
})    