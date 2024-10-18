import { commands } from "/cypress/support/commands";
import { appActions } from "/cypress/support/system/app/actions";

describe('Login user with empty email', () => {

  beforeEach(() => {
    appActions.app.gotoLogin();
  });

  it('Fill password and try login', () => {
    appActions.login.fillPassword(commands.env().adminLogin);
    appActions.login.buttonClick();
    appActions.app.checkAlertMessage('Error to try login');
  });

});
