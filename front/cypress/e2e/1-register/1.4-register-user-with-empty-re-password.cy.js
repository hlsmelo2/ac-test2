import { commands } from "/cypress/support/commands";
import { appActions } from "/cypress/support/system/app/actions";

describe('Register user with empty rePassword', () => {
  beforeEach(() => {
    appActions.app.gotoRegister();
  });

  it('Fill name, email and Password and try register', () => {
    appActions.register.fillName(commands.getUserName());
    appActions.register.fillEmail(commands.getNewEmail());
    appActions.register.fillPassword(commands.env().defaultPassword);
    appActions.register.buttonClick();
    appActions.app.checkAlertMessage('The password fields should have the same value');
  });
});
