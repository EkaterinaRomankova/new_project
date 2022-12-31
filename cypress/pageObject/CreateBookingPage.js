class CreateBookingPage{
    elements = {
        getTitleOnThePage: () => cy.get('.content-header.booking-header h1')
    }
}

export default CreateBookingPage;