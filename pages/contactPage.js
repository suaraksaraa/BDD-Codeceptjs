const { I } = inject();

module.exports = {
    elements: {
        contactText: String('Passenger Details'),
        titleDropdwon: '//div[@class="flight-dropdown contact-person-dropdown"]',
        titleList: '(//li[@class="list-data"])[1]',
        nameField: '//input[@class="input-list-autocomplete"]',
        emailField: '//input[@class="input-flight-textinput"]',
        phoneField: '//input[@class="input-flight-textinput"]',
        switchToogle: '//span[@class="switch"]',
        nationalityDropdown: '//input[@class="input-flight-dropdown-searchbox"]',
        nationalitySearch: '//input[@placeholder="Search your contry name"]',
        nationalityList: '//div[@class="list-menu list-menu-flight-dropdown-searchbox"]',
        continueButton: '//button[@class="v3-btn v3-btn__yellow pull-right"]',
        continuePopup: String('YES, CONTINUE'),

    },
    contactDetailPage(){
        I.see(this.elements.contactText);
    },
    fillFormPassenger(){
        I.click(this.elements.titleDropdwon);
        I.click(this.elements.titleList);
        I.fillField(this.elements.nameField, 'Tiket test');
        I.fillField(this.elements.emailField, 'tiket-test@mailinator.com');
        I.fillField(this.elements.phoneField, '85263780213');
        I.click(this.elements.switchToogle);
        I.click(this.elements.nationalityDropdown);
        I.fillField(this.elements.nationalitySearch, 'Indonesia');
        I.click(this.elements.nationalityList);
    },
    continuePayment(){
        I.click(this.elements.continueButton);
        I.click(this.elements.continuePopup);
    }
}