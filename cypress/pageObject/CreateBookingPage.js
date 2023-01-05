class CreateBookingPage{
    elements = {
        getTitleOnThePage: () => cy.get('.content-header.booking-header h1'),
        getAllDatesOfDepTime: () => cy.get('.calendar-wrapper .day-wrapper')
    }
}

export default CreateBookingPage;