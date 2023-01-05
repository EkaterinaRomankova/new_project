/// <reference types="cypress" />

import RegisterPage from "../pageObject/RegisterPage"
import CreateBookingPage from "../pageObject/CreateBookingPage"
import Header from "../pageObject/header"
import { each } from "cypress/types/bluebird"

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

    it('create booking', function() {
        registerPage.clickOnButtonLogin()
        cy.logIn(this.data.email, this.data.password)
        cy.wait(9000)
        createBookingPage.elements.getAllDatesOfDepTime().then(($el, i) => {
            let d = new Date() 
            let d1 = d.toLocaleString('en-GB', { timeZone: 'Asia/Bangkok' })
            let d2 = +d1.slice(0, 2); 
            if($el.text().indexOf(d2) == 4){
                let arr = $el.text().slice(0, $el.text().indexOf(d2))
                //cy.get('.calendar-wrapper .day-wrapper:nth-child(6)').click()
                arr.each(el, i).should('')
                

            }
        })       
    })
})    