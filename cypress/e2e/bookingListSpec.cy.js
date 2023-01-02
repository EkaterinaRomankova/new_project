/// <reference types="cypress" />

import BookingListPage from "../pageObject/BookingListPage"
import RegisterPage from "../pageObject/RegisterPage"

const bookingList = new BookingListPage()
const registerPage = new RegisterPage()

describe('create booking page', () => {
    beforeEach(function(){
        cy.fixture('registerPage').then(data => {
            this.data = data
        })
        cy.visit('/')
    })

    xit('check status RESERVED coloms', function() {
        registerPage.clickOnButtonLogin()
        cy.logIn(this.data.email, this.data.password)
        cy.wait(9000)
        bookingList.clickOnBokinglistOfOrders()
        bookingList.elements.getStatusColom().select(this.data.statusReserved.trim(), {force: true})
        cy.wait(9000)
        bookingList.elements.getAllStatus().each(($el) => {
            expect($el.text()).to.include(this.data.statusReserved)
        }) 
    })

    xit('check status CONFIRMED coloms', function() {
        registerPage.clickOnButtonLogin()
        cy.logIn(this.data.email, this.data.password)
        cy.wait(9000)
        bookingList.clickOnBokinglistOfOrders()
        bookingList.elements.getStatusColom().select(this.data.statusConfirmed.trim(), {force: true})
        cy.wait(9000)
        bookingList.elements.getAllStatus().each(($el) => {
            expect($el.text()).to.include(this.data.statusConfirmed)
        })
        bookingList.clickOnCloseChosenStatus() 
        cy.wait(9000)
        bookingList.elements.getAllStatus().each(($el, i) => {
            expect(this.data.allStatuses).to.include($el.text())
        })
        
    })
})    