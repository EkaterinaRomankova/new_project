/// <reference types="Cypress" />

import CreateBookingPage from "../../../pageObjects/CreateBookingPage";

const createBookingPage = new CreateBookingPage();

describe('US_04.29 | Seat selection dropdown UI and functionality', () => {

    const AGENT = Cypress.env('agent');
    
    beforeEach(function() {
        cy.fixture('createBookingPage').then(createBookingPage => {
            this.createBookingPage = createBookingPage;
        })
    });

    before(function() {
        cy.visit('/')
        cy.login(AGENT.email, AGENT.password)
        
        createBookingPage.clickCalendarNextButton()
        cy.wait(5000)
        createBookingPage.clickFridayButton()
        cy.wait(2000)
        createBookingPage.clickFirstTripCard()
    });

    it('AT_04.29.01 | The amount of passengers in the "Seat selection dropdown" is equal the number of available tickets in the selected trip', function() {

        createBookingPage.getTicketsAvailableFirstTripCard().then(($tickets) => {
            const ticketsAvailable = Number($tickets.text())
            
            createBookingPage.getSeatSelectionDropdownList().then(($el) => {
                const passengersAmountArray = $el
                    .toArray()
                    .map(el => parseInt(el.innerText))

                const passengersAmountAvailable = passengersAmountArray[passengersAmountArray.length - 1]
    
                expect(passengersAmountAvailable).to.equal(ticketsAvailable)
            })
        })
    });

    it('AT_04.29.02 | The list of passengers starts with "1 passenger" and each subsequent element increases by one', function() {
        
        createBookingPage.getSeatSelectionDropdownList().then(($el) => {
            const passengersArray = $el
                .toArray()
                .map(el => el.innerText)
                
            if (passengersArray[0] == this.createBookingPage.dropdowns.seatSelection.onePassenger) {
                for (let i = passengersArray.length - 1; i > 0; i--) {
                    expect(passengersArray[i])
                    .to.equal((parseInt(passengersArray[i - 1]) + 1) + ' ' + this.createBookingPage.dropdowns.seatSelection.passengers)
                }
                expect(passengersArray[0]).to.equal(this.createBookingPage.dropdowns.seatSelection.onePassenger)
            }
        })
    });

    it('AT_04.29.03 | When selecting the required amount of passengers the corresponding number of seats in the "Seats table" will be rgb(157, 208, 157) color', function() {
        
        createBookingPage.getSeatSelectionDropdownList().then(($el) => {
            const passengersArray = $el
                .toArray()
                .map(el => el.innerText)
    
            const indexArr = Math.floor(Math.random() * passengersArray.length) 
            const passengersAmount = passengersArray[indexArr]
             
            createBookingPage.getSeatSelectionDropdown()
                .select(passengersAmount)
                .should('have.value', parseInt(passengersAmount))

            createBookingPage.getSelectedSeats().then(($cell) => {
                expect($cell).to.have.css('background-color', this.createBookingPage.seatSelectionTable.selectedSeatColor)

                const selectedSeatsArr = $cell
                    .toArray()
                    .map(el => el.innerText)
 
                const selectedSeats = selectedSeatsArr.length

            expect(selectedSeats).to.equal(parseInt(passengersAmount))   
            })
        })
    })

    it('AT_04.29.04 | The number of passengers in "Seat selection dropdown" is equal the number of passengers is displayed in the "Passengers details dropdown".', function() {
        createBookingPage.getSeatSelectionDropdownList().then(($el) => {
           let arrayOfSeats = $el
               .toArray()
               .map(el => el.innerText.split('\n'))

           let indexOfSeat = Math.floor(Math.random() * arrayOfSeats.length)
           let amountOfPass = arrayOfSeats[indexOfSeat]

           createBookingPage.getSeatSelectionDropdown().select(amountOfPass)

           createBookingPage.getAmountOfChosenPass().should('have.length', parseInt(amountOfPass))

           createBookingPage.getAmountOfChosenPass().then(($el) => {
            let amountOfChoosenPass = $el
                .toArray()
                .map(el => el.innerText)

            expect(parseInt(amountOfPass)).to.eq(amountOfChoosenPass.length)
           })
        }) 
    })

    it('AT_04.12.01 | Create booking page > Verify any date earlier than the current date is not available.', function () {
		let date = new Date() 
		let dateThailand = date.toLocaleString('en-GB', { day: 'numeric', timeZone: 'Asia/Bangkok' })
		let currentMonthAndYear = date.toLocaleString('en-GB', { month: 'short', year: 'numeric', timeZone: 'Asia/Bangkok'})
		createBookingPage.getMonthDropdownSelect().select(currentMonthAndYear)
		createBookingPage.getCalendarDays().not('.shaded').each(($el) => {
            if(+$el.text() < dateThailand){
				console.log($el.text());
                expect($el).to.have.class(this.createBookingPage.class.unavailableClass)
            }          
		})		
	})

    it('AT_04.04.01 | Create booking page > Verify that week/month format lable', function () {
        let current = new Date()
        current.setHours(current.getUTCHours() + 7)
        current.setDate(current.getDate() - current.getDay() + 1)
        console.log(current);
	    let mondayDate = current.toLocaleString('en-GB', { month: 'short', day: 'numeric'})
        current.setDate(current.getDate() - current.getDay() + 7)
        console.log(current);
        let sundayDate = current.toLocaleString('en-GB', { month: 'short', day: 'numeric'})
        let weekFormat = mondayDate + " " + "-" + " " + sundayDate
        createBookingPage.getLabelCalendar().then(($el) => {
            let labelWeekFormat = $el.text()
            expect(weekFormat).to.eq(labelWeekFormat)
        })
        createBookingPage.clickMonthBtn()
        let dateForBooking = new Date()
        dateForBooking.setDate(current.getDate() + 2)
        let monthForBooking = dateForBooking.toLocaleString('en-US', { month: 'short', year: 'numeric', timeZone: 'Asia/Bangkok' })
        createBookingPage.getLabelCalendar().then(($el) => {
            let labelMonthFormat = $el.text()
            expect(monthForBooking).to.eq(labelMonthFormat)
        })
    })
    it('AT_04.04.01 | Create booking page > Verify that week/month format lable', function () {
        let current = new Date()
        current.setHours(current.getUTCHours() + 7)
        current.setDate(current.getDate() - current.getDay() + 1)
	    let mondayDate = current.toLocaleString('en-GB', { month: 'short', day: 'numeric' })
        current.setDate(current.getDate() - current.getDay() + 7)
        let sundayDate = current.toLocaleString('en-GB', { month: 'short', day: 'numeric' })
        let weekFormat = mondayDate + " " + "-" + " " + sundayDate
        createBookingPage.getLabelCalendar().then(($el) => {
            let labelWeekFormat = $el.text()
            expect(weekFormat).to.eq(labelWeekFormat)
        })
        createBookingPage.clickMonthBtn()
        let dateForBooking = new Date(Date.now() + 172800000)
        let monthForBooking = dateForBooking.toLocaleString('en-US', { month: 'short', year: 'numeric', timeZone: 'Asia/Bangkok' })
        createBookingPage.getLabelCalendar().then(($el) => {
            let labelMonthFormat = $el.text()
            expect(monthForBooking).to.eq(labelMonthFormat)
        })
    })
})