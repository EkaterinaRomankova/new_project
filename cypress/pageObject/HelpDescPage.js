class HelpDescPage{
    elements = {
        getSelectMenu: () => cy.get('.col-xs-12 #filterStatus'),
        getNewRequest: () => cy.get('.box #btn-new-request'),
        getTitleOfNewRequest: () => cy.get('.popup-content h3'),
        getTitleMessage: () => cy.get('.request-title'),
        getMessage: () => cy.get('.request-message'),
        getButtonSend: () => cy.get('.btn-send-new-request'),
        getCloseWindow: () => cy.get('.close-button'),
        getListOfTopics: () => cy.get('#topics-list-box .topic-title'),
        getAllActiveStatuses: () => cy.get('#topics-list-box .topic-title span')
    }

    clickOnNewRequest(){
        this.elements.getNewRequest().click()
    }

    clickOnButtonSend(){
        this.elements.getButtonSend().click()
    }

    clickOnCloseWindow(){
        this.elements.getCloseWindow().click()
    }
}

export default HelpDescPage