const { I } = inject();

module.exports = {
    elements: {
        listPaymentMethod: '//div[@class="payment-method-item"]',
        virtualAccountMethod: '(//div[@class="payment-method-item"])[5]',
        continueButton: '(//button[@type="button"])[2]',
        seeOrderListButton: '(//button[@type="button"])[2]',
        myOrderPopupButton: '(//button[@type="button"])[1]'
    },
    listPayment(){
        I.waitForElement(this.elements.listPaymentMethod, 40);
    },
    selectVirtualAccount(){
        I.click(this.elements.virtualAccountMethod);
        I.wait(2);
    },
    virtualAccountPage(){
        I.waitForElement(this.elements.continueButton);
        I.click(this.elements.continueButton);
        I.wait(2);
    },
    clickOrderList(){
        I.click(this.elements.seeOrderListButton);
        I.wait(2);
        I.click(this.elements.myOrderPopupButton);
    }
}