const { I } = inject();
const random = Math.floor(Math.random() * 4) + 1;

module.exports = {
    elements: {
        textFlight: String('Find Cheap Flight Tickets Price'),
        roundtrip: String('Roundtrip'),
        FlightForm: '(//div[@class="airport input-flightform"])[1]',
        departureCityCode: String('CGK'),
        departureCityList: '(//li[@class="list selected"])[1]',
        destinationCityCode: String('AMQ'),
        destinationCityList: '(//li[@class="list selected"])[1]',
        DepartureDate: `(//div[@class="CalendarMonth CalendarMonth_1"])[3]/table/tbody/tr[${random}]/td[${Math.floor(Math.random() * 4) + 1}]`,
        ReturnDate: `(//div[@class="CalendarMonth CalendarMonth_1"])[3]/table/tbody/tr[${random}]/td[${Math.floor(Math.random() * 4) + 1}]`,
        Passenger: '//button[@class="v3-btn btn-done"]',
        searchFlightbutton: '//button[@class="v3-btn v3-btn__yellow"]'

    },
    reservationFlight() {
        I.waitForText(this.elements.textFlight);
    },
    tickRountrip(){
        I.checkOption(this.elements.roundtrip);
    },
    selectDepartureCity(){
        I.click(this.elements.FlightForm);
        I.type(this.elements.departureCityCode);
        I.click(this.elements.departureCityList);
    },
    selectDestinationCity(){
        I.type(this.elements.destinationCityCode);
        I.click(this.elements.destinationCityList);
        I.wait(2)
    },
    selectDepartureDate(){
        I.click(this.elements.DepartureDate);
        I.wait(2);
    },
    selectReturnDate(){
        I.click(this.elements.ReturnDate);
        I.wait(2);
    },
    Passenger(){
        I.click(this.elements.Passenger);
        I.wait(2)
    },
    searchFlight(){
        I.click(this.elements.searchFlightbutton);
    }

}