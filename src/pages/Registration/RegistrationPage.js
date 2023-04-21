const { NavigationBase } = require("../NavigationBase");
const { RegistrationPageObject } = require("./RegistrationPageObject");

exports.RegistrationPage = class RegistrationPage extends NavigationBase {

    constructor(page) {
        super(page);
    }

    async fillinRegistrationForm() {
        await this.type(RegistrationPageObject.FIRST_NAME_INPUT, 'Piotr');
        await this.type(RegistrationPageObject.LAST_NAME_INPUT, 'Papadopoulos');
        await this.type(RegistrationPageObject.EMAIL_INPUT, 'Papadopoulos@gmail.com');
        await this.type(RegistrationPageObject.PHONE_INPUT, '6983451234');
        await this.click(RegistrationPageObject.RADIO_BUTTON_LINKEDIN);
    }

    async clickRegisterButton() {
        await this.click(RegistrationPageObject.REGISTER_BUTTON);
    }

    async verifyRegistrationMessage() {
        await this.waitForElementToHaveText(RegistrationPageObject.REGISTRATION_BANNER_MESSAGE, 'Thank you for registering for our event.');
    }
}