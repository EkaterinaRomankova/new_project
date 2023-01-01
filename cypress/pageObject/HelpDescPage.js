class HelpDescPage{
    elements = {
        getSelectMenu: () => cy.get('.col-xs-12 #filterStatus'),
        getNewRequest: () => cy.get('.box #btn-new-request')
    }

    clickOnNewRequest(){
        this.elements.getNewRequest().click()
    }
}

export default HelpDescPage