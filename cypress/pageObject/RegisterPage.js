class RegisterPage{
    elements = {
        getEnglishIconLan: () => cy.get('a[href="/en"]'),
        getButtonLogin: () => cy.get('a[hreh="#"]'),
        getRussianIconLan: () => cy.get('a[href="/ru"]'),
        getThailandIconLan: () => cy.get('a[href="/th"]')
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
}

export default RegisterPage;