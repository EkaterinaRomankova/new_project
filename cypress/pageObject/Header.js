class Header{
    elements = {
        getAgentMenu: () => cy.get('.main-header .dropdown-toggle'),
        getLogOut: () => cy.get('a[href="/logout/"]')

    }

    clickOnAgentMenu(){
        this.elements.getAgentMenu().click()
    }

    clickOnLogOut(){
        this.elements.getLogOut().click()
    }
}

export default Header