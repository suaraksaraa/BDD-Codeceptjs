const { I } = inject();

module.exports = {
    elements: {
        checkMyOrderButton: '//button[@class="check-order-button"]',
        login: String('Login')
    },
    checkMyOrder(){
        I.waitForElement(this.elements.checkMyOrderButton);
    },
    clickLogin(){
        I.click(this.elements.login);
    }

}