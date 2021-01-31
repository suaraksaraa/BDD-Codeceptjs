const { I } = inject();

module.exports = {
    elements: {
        informationButton: '//div[@class="v3-btn v3-btn__blue list-horizontal__middle btn-action"]',
        checkboxTransit: `(//div[@class="custom-checkbox single"])[${Math.floor(Math.random() * 3) + 2}]`,
        departureFilter: '//input[@id="departure_dawn"]',
        departureFlight: '//div[@class="btn-book-now"]',
        returnFlight: '//div[@class="btn-book-now"]'

    },
    clickInfo(){
        I.waitForElement(this.elements.informationButton);
        I.click(this.elements.informationButton);
    },
    filterTransit(){
        I.dontSeeCheckboxIsChecked(this.elements.checkboxTransit);
        I.click(this.elements.checkboxTransit);
    },
    filterDepartureTime(){
        I.click(this.elements.departureFilter);
    },
    selectDepartureFlight(){
        I.click(this.elements.departureFlight);
    },
    selectReturnFlight(){
        I.click(this.elements.returnFlight);
        I.wait(2);
    }
}