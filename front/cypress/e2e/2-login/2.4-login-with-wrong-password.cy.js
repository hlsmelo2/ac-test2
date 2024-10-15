import { commands } from "/cypress/support/commands";
import { appActions } from "/cypress/support/system/app/actions";

describe('Login user with empty email', () => {

  beforeEach(() => {
    appActions.app.gotoLogin();
  });

  it('Fill wrong password and try login', () => {
    appActions.login.fillEmail(commands.env().adminLogin);
    appActions.login.fillPassword('WRONG');
    appActions.login.buttonClick();
  });

});
