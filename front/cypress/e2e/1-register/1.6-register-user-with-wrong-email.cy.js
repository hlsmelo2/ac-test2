import { commands } from "/cypress/support/commands";
import { appActions } from "/cypress/support/system/app/actions";

describe('Register user with wrong email', () => {
  beforeEach(() => {
    appActions.app.gotoRegister();
  });

  it('Fill correct fields except email and try register', () => {
    appActions.register.fillName(commands.getUserName());
    appActions.register.fillEmail('WRONG');
    appActions.register.fillPassword(commands.env().defaultPassword);
    appActions.register.fillRePassword(commands.env().defaultPassword);
    appActions.register.buttonClick();
    appActions.app.checkAlertMessage('Error to try register');
  });
});
