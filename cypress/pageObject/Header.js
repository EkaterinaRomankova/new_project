class Header{
    elements = {
        getAgentMenu: () => cy.get('.main-header .dropdown-toggle'),
        getLogOut: () => cy.get('a[href="/logout/"]'),
        getHelpDescIcon: () => cy.get('#header-messages')

    }

    clickOnAgentMenu(){
        this.elements.getAgentMenu().click()
    }

    clickOnLogOut(){
        this.elements.getLogOut().click()
    }

    clickOnHelpDescIcon(){
        this.elements.getHelpDescIcon().click()
    }
}

export default Header