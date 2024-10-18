import { commands } from "/cypress/support/commands";
import { appActions } from "/cypress/support/system/app/actions";

describe('Register user with empty email', () => {
  beforeEach(() => {
    appActions.app.gotoRegister();
  });

  it('Fill name and password and try register', () => {
    appActions.register.fillName(commands.getUserName());
    appActions.register.fillPassword(commands.env().defaultPassword);
    appActions.register.fillRePassword(commands.env().defaultPassword);
    appActions.register.buttonClick();
    appActions.app.checkAlertMessage('Error to try register');
  });
});
