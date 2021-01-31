const { I } = inject();

module.exports = {
    elements: {
        username: '//input[@name="username"]',
        submitButton: '//button[@class="btn-custom btn-custom-yellow btn-custom-full submitEmail"]',
        password: '//div[@class="input-wrap password-wrap"]',
        loginButton: '//button[@class="btn-custom btn-custom-yellow btn-custom-full loginSubmitButton"]',
        verifyAccount: String('Make sure this account is yours')
    },
    fillFormLogin(){
        I.fillField(this.elements.username, 'tiket-test@mailinator.com');
        I.click(this.elements.submitButton);
        I.fillField(this.elements.password, 'Q1w2e3r4');
        I.click(this.elements.loginButton);
    },
    verifyAccount(){
        I.see(this.elements.verifyAccount);
    }
}