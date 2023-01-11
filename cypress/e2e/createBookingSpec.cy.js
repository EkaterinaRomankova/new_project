/// <reference types="cypress" />

import RegisterPage from "../pageObject/RegisterPage"
import CreateBookingPage from "../pageObject/CreateBookingPage"
import Header from "../pageObject/header"

const registerPage = new RegisterPage()
const createBookingPage = new CreateBookingPage()
const header = new Header()

describe('create booking page', () => {
    beforeEach(function(){
        cy.fixture('registerPage').then(data => {
            this.data = data
        })
        cy.visit('/')
    })

    xit('verify anavaible dates', function() {
        registerPage.clickOnButtonLogin()
        cy.logIn(this.data.email, this.data.password)
        cy.wait(9000)
        let d = new Date() 
        let d1 = d.toLocaleString('en-GB', { timeZone: 'Asia/Bangkok' })
        let d2 = +d1.slice(0, 2)
        createBookingPage.elements.getAllDatesOfDepTime().then(($el, i) => {
            if($el.text().indexOf(d2) == -1){
                createBookingPage.clickOnWeekBack()
            }
        })
        createBookingPage.elements.getAllDatesOfDepTime().then(($el, i) => {
            if($el.text().indexOf(d2) == 5){
                cy.wrap($el.slice(0, $el.text().indexOf(d2))).each(($el => {
                    cy.wrap($el).should('have.class', this.data.unavaiblaClass)
                }))
            } 
            if($el.text().indexOf(d2) == 4){
                cy.wrap($el.slice(0, $el.text().indexOf(d2))).each(($el => {
                    cy.wrap($el).should('have.class', this.data.unavaiblaClass)
                }))
            } 
            if($el.text().indexOf(d2) == 1){
                cy.wrap($el.slice(0, $el.text().indexOf(d2))).each(($el => {
                    cy.wrap($el).should('have.class', this.data.unavaiblaClass)
                }))
            } 
            if($el.text().indexOf(d2) == 2){
                cy.wrap($el.slice(0, $el.text().indexOf(d2))).each(($el => {
                    cy.wrap($el).should('have.class', this.data.unavaiblaClass)
                }))
            } 
            if($el.text().indexOf(d2) == 3){
                cy.wrap($el.slice(0, $el.text().indexOf(d2))).each(($el => {
                    cy.wrap($el).should('have.class', this.data.unavaiblaClass)
                }))
            } 
            if($el.text().indexOf(d2) == 6){
                cy.wrap($el.slice(0, $el.text().indexOf(d2))).each(($el => {
                    cy.wrap($el).should('have.class', this.data.unavaiblaClass)
                }))
            } 
        }) 
    })

    xit('vurify that you can not buy ticket for 2 day', function() {
        registerPage.clickOnButtonLogin()
        cy.logIn(this.data.email, this.data.password)
        cy.wait(9000)
        let d = new Date() 
        let d1 = d.toLocaleString('en-GB', { timeZone: 'Asia/Bangkok' })
        let d2 = +d1.slice(0, 2)
        createBookingPage.elements.getAllDatesOfDepTime().then(($el, i) => {
            if($el.text().indexOf(d2) == -1){
                cy.wait(9000)
                createBookingPage.clickOnWeekBack()
            }
        })
        createBookingPage.elements.getAllDatesOfDepTime().then(($el, i) => {
            if($el.text().indexOf(d2) == 0){
                createBookingPage.elements.getBusTickets().should('have.class', this.data.disabledClass)
            }
            if($el.text().indexOf(d2) == 5){
                cy.wait(4000)
                createBookingPage.elements.getBusTickets().should('have.class', this.data.disabledClass)
                createBookingPage.clikcOnSunday()
                cy.wait(4000)
                createBookingPage.elements.getBusTickets().should('have.class', this.data.disabledClass)
                createBookingPage.clickOnNextWeek()
                cy.wait(4000)
                createBookingPage.elements.getAllDatesOfDepTime().then(() => {
                    createBookingPage.clickOnMonday()
                    cy.wait(4000)
                    createBookingPage.elements.getBusTickets().should('have.class', this.data.disabledClass)
                    createBookingPage.clickOnTuesday()
                    cy.wait(4000)
                    createBookingPage.elements.getBusTickets().should('not.have.class', this.data.disabledClass)
                })
            }
            if($el.text().indexOf(d2) == 6){
                cy.wait(4000)
                createBookingPage.elements.getBusTickets().should('have.class', this.data.disabledClass)
                createBookingPage.clickOnNextWeek()
                cy.wait(4000)
                createBookingPage.elements.getAllDatesOfDepTime().then(() => {
                    createBookingPage.clickOnMonday()
                    cy.wait(4000)
                    createBookingPage.elements.getBusTickets().should('have.class', this.data.disabledClass)
                    createBookingPage.clickOnTuesday()
                    cy.wait(4000)
                    createBookingPage.elements.getBusTickets().should('have.class', this.data.disabledClass)
                    createBookingPage.clickOnWednesday()
                    cy.wait(4000)
                    //createBookingPage.elements.getBusTickets().should('have.class', this.data.disabledClass) // should not work
                    createBookingPage.elements.getBusTickets().should('not.have.class', this.data.disabledClass) //should work
                })
            }
        })        
    })

    xit('', function() {
        registerPage.clickOnButtonLogin()
        cy.logIn(this.data.email, this.data.password)
        cy.wait(9000)
        let d = new Date(Date.now() + 172800000)
        let d1 = d.toLocaleString('en-GB', { timeZone: 'Asia/Bangkok' })
        //let d2 = +d1.slice(0, 2)   
    })

    xit('create booking', function() {
        let seat
        registerPage.clickOnButtonLogin()
        cy.logIn(this.data.email, this.data.password)
        cy.wait(20000)
        createBookingPage.elements.getBusTickets().then(($el) => {
            if($el.hasClass(this.data.disabledClass)){
               cy.get('.col-lg-12 .day-wrapper.selected').next().click()
               cy.wait(5000)
            }
        })
        createBookingPage.elements.getBusTickets().first().click()
        createBookingPage.elements.getTableSeats().filter(this.data.filterSelected)//.first().click()    
        createBookingPage.elements.getNameField().type(this.data.name)  
        createBookingPage.elements.getNotesField().type(this.data.message)
        createBookingPage.elements.getSeatLocator().then(($el) => {
            seat = $el.text()
            console.log(seat);
        })
        
        createBookingPage.clickOnButtonBookTicket()
        cy.wait(10000)
    })

    xit('verify anavaible dates second version in a week', function() {
        registerPage.clickOnButtonLogin()
        cy.logIn(this.data.email, this.data.password)
        cy.wait(9000)
        let d = new Date() 
        let d1 = d.toLocaleString('en-GB', { timeZone: 'Asia/Bangkok' })
        let d2 = +d1.slice(0, 2)
        createBookingPage.elements.getAllDatesOfDepTime().each(($el, i) => {
            if($el.text() < d2){
                expect($el).to.have.class(this.data.unavaiblaClass)
            }          
         })     
    })

    xit('verify anavaible dates third version in a week', function() {
        registerPage.clickOnButtonLogin()
        cy.logIn(this.data.email, this.data.password)
        cy.wait(9000)
        let d = new Date() 
        let d1 = d.toLocaleString('en-GB', { timeZone: 'Asia/Bangkok' })
        let d2 = +d1.slice(0, 2)
        createBookingPage.elements.getAllDatesOfDepTime().filter('.unavailable').each(($el, i) => {    
            expect(+$el.text()).to.be.lessThan(d2)
        })   
    })     
    
    xit('verify anavaible dates in a month', function() {
        registerPage.clickOnButtonLogin()
        cy.logIn(this.data.email, this.data.password)
        cy.wait(9000)
        let d = new Date() 
        let d1 = d.toLocaleString('en-GB', { timeZone: 'Asia/Bangkok' })
        let d2 = +d1.slice(0, 2)
        createBookingPage.clickOnGetMonth()
        createBookingPage.elements.getAllDatesOfMonth().filter('.unavailable').then(($el, i) => {
            console.log(+$el.text());
            
            //expect(+$el.text()).to.be.lessThan(d2)
        })   
    })    
})    
