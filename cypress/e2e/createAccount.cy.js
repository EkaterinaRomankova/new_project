/// <reference types="cypress" />

import CreateAccount from "../pageObject/CreateAccount"
import Header from "../pageObject/header"
import RegisterPage from "../pageObject/RegisterPage"
import { faker } from '@faker-js/faker'

const createAcc = new CreateAccount()
const header = new Header()
const registerPage = new RegisterPage()

const userName = faker.internet.userName()
const email = faker.internet.email()
const password = faker.internet.password()
const comName = faker.company.companyName()
const phoneNumber = faker.phone.phoneNumber().cell_phone_in_e164


describe('create account possitive and negative', () => {
    beforeEach(function(){
        cy.fixture('registerPage').then(data => {
            this.data = data
        })
        cy.visit('/')
    })

    it('create account', function() {
        registerPage.clickOnCreateAccount()
        createAcc.elements.getNameFielld().type(userName)
        createAcc.elements.getCompanyName().type(comName)
        createAcc.elements.getEmailField().type(email)
        createAcc.elements.getPhoneField().type(phoneNumber)
        createAcc.clickOnButtonRegister()
        
    });
})