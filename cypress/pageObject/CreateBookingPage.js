class CreateBookingPage{
    elements = {
        getTitleOnThePage: () => cy.get('.content-header.booking-header h1'),
        getAllDatesOfDepTime: () => cy.get('.calendar-wrapper .day-wrapper'),
        getBackWeek: () => cy.get('.col-lg-12 .calendar-week-prev'),
        getBusTickets: () => cy.get('.trips-list-wrapper .vehclass-bus'),
        getSunday: () => cy.get('.calendar-wrapper .calendar-day-selection-wrapper :nth-child(7)'),
        getNextWeek: () => cy.get('.col-lg-12 .calendar-week-next'),
        getMonday: () => cy.get('.calendar-wrapper .calendar-day-selection-wrapper :nth-child(1)'),
        getTuesday: () => cy.get('.calendar-wrapper .calendar-day-selection-wrapper :nth-child(2)'),
        getWednesday: () => cy.get('.calendar-wrapper .calendar-day-selection-wrapper :nth-child(3)'),
        getTableSeats: () => cy.get('table.seats tr td'),
        getNameField: () => cy.get('[placeholder="Passenger name"]'),
        getNotesField: () => cy.get('.notes-row #booking_notes'),
        getButtonBookTicket: () => cy.get('[onclick="bookTicket();"]'),
        getSeatLocator: () => cy.get('label .seat-number'),
        getMonth: () => cy.get('.calendar-view-wrapper .calendar-view-month'),
        getAllDatesOfMonth: () => cy.get('.col-lg-12.calendar-day-selection-wrapper div')
    }

    clickOnWeekBack(){
        this.elements.getBackWeek().click()
    }

    clikcOnSunday(){
        this.elements.getSunday().click()
    }

    clickOnNextWeek(){
        this.elements.getNextWeek().click()
    }

    clickOnMonday(){
        this.elements.getMonday().click()
    }

    clickOnTuesday(){
        this.elements.getTuesday().click()
    }

    clickOnWednesday(){
        this.elements.getWednesday().click()
    }

    clickOnButtonBookTicket(){
        this.elements.getButtonBookTicket().click()
    }

    clickOnGetMonth(){
        this.elements.getMonth().click()
    }
}

export default CreateBookingPage;