class BookingListPage{
    elements = {
        getBookingListOfOrders: () => cy.get('a[href="/orders/"]'),
        getStatusColom: () => cy.get('#others-filtres #filterStatus'),
        getAllStatus: () => cy.get('#data nobr'),
        getCloseChosenStatus: () => cy.get('.select2-selection__choice__remove')
    }

    clickOnBokinglistOfOrders(){
        this.elements.getBookingListOfOrders().click()
    }

    clickOnCloseChosenStatus(){
        this.elements.getCloseChosenStatus().click()
    }
}

export default BookingListPage