import { commands } from "/cypress/support/commands";
import { appActions } from "/cypress/support/system/app/actions";

describe('Register user with empty password', () => {
  beforeEach(() => {
    appActions.app.gotoRegister();
  });

  it('Fill name, email and rePassword and try register', () => {
    appActions.register.fillName(commands.getUserName());
    appActions.register.fillEmail(commands.getNewEmail());
    appActions.register.fillRePassword(commands.env().defaultPassword);
    appActions.register.buttonClick();
    appActions.app.checkAlertMessage('The password fields should have the same value');
  });
});
