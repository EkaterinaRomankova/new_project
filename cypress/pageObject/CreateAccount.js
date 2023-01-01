class CreateAccount{
    elements = {
        getNameFielld: () => cy.get('[placeholder="John Doe"]'),
        getCompanyName: () => cy.get('[placeholder="Transportation Co"]'),
        getEmailField: () => cy.get('[placeholder="You will get your password by email"]'),
        getPhoneField: () => cy.get('[name="phone"]'),
        getButtonRegister: () => cy.get('[value="Register"]'),
        getRegisterTitle: () => cy.get('.modal-header h5')

    }

    clickOnButtonRegister(){
        this.elements.getButtonRegister().click()
    }
}

export default CreateAccount