import { appActions } from "/cypress/support/system/app/actions";

export class Register {
    constructor(data) {
        this.test(data.messages, data.data);
    }

    test(messages, data) {
        describe(messages.describe, () => {
            beforeEach(() => {
                appActions.app.gotoRegister();
            });

            it(messages.itRegister, () => {
                appActions.register.fillName(data.name);
                appActions.register.fillEmail(data.email);
                appActions.register.fillPassword(data.password);
                appActions.register.fillRePassword(data.rePassword);
                appActions.register.buttonClick();

                if ([undefined, ''].indexOf(messages.alert) === -1) {
                    appActions.app.checkAlertMessage(messages.alert);
                }

                if (data.checkLoginPage) {
                    appActions.register.buttonClick();
                }
            });
        });
    }
}
