class RegisterPage{
    elements = {
        getEnglishIconLan: () => cy.get('a[href="/en"]'),
        getButtonLogin: () => cy.get('a[hreh="#"]'),
        getRussianIconLan: () => cy.get('a[href="/ru"]'),
        getThailandIconLan: () => cy.get('a[href="/th"]'),
        getLogo:() => cy.get('.logo'),
        getCreateAccount: () => cy.get('a[href="#registerModal"]'),
        getRestorePassword: () => cy.get('.modal-footer :nth-child(3) [data-target="#restoreModal"]'),
        getEmailFieldRestorePassword: () => cy.get('#restoreModal [name="email"]'),
        getRestoreButton: () => cy.get('#restoreModal .center-block'),
        getMessageOfRestore: () => cy.get('.alert-success')
    }

    clickOnEnglishIconLan(){
        this.elements.getEnglishIconLan().click()
    }

    clickOnRussianIconLan(){
        this.elements.getRussianIconLan().click()
    }

    clickOnThailandIconLan(){
        this.elements.getThailandIconLan().click()
    }

    clickOnButtonLogin(){
        this.elements.getButtonLogin().click()
    }

    clickOnCreateAccount(){
        this.elements.getCreateAccount().click()
    }

    clickOnRestorePassword(){
        this.elements.getRestorePassword().click()
    }

    clickOnRestoreButton(){
        this.elements.getRestoreButton().click()
    }
}

export default RegisterPage;