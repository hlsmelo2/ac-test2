import { appActions } from "/cypress/support/system/app/actions";

export class Login {
    constructor(data) {
        this.test(data.messages, data.data);
    }

    test(messages, data) {
        describe(messages.describe, () => {
            beforeEach(() => {
                appActions.app.gotoLogin();
            });

            it(messages.itLogin, () => {
                appActions.login.fillEmail(data.email);
                appActions.login.fillPassword(data.password);
                appActions.login.buttonClick();

                if ([undefined, ''].indexOf(messages.alert) === -1) {
                    appActions.app.checkAlertMessage(messages.alert);
                }

                if (data.checkTransfersPage) {
                    appActions.transfers.checkPage();
                }
            });
        });
    }
}
