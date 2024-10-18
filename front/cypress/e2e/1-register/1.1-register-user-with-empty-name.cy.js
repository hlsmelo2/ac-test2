import { commands } from "/cypress/support/commands";
import { appActions } from "/cypress/support/system/app/actions";

describe('Register user with empty name', () => {
  beforeEach(() => {
    appActions.app.gotoRegister();
  });

  it('Fill email and password and try register', () => {
    appActions.register.fillEmail(commands.env().adminLogin);
    appActions.register.fillPassword(commands.env().defaultPassword);
    appActions.register.fillRePassword(commands.env().defaultPassword);
    appActions.register.buttonClick();
    appActions.app.checkAlertMessage('Error to try register');
  });
});
