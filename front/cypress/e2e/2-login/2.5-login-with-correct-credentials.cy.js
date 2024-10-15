import { commands } from "/cypress/support/commands";
import { appActions } from "/cypress/support/system/app/actions";

describe('Login with correct credentials', () => {

  beforeEach(() => {
    appActions.app.gotoLogin();
  });

  it('Fill correct credentials and try login', () => {
    appActions.login.fillEmail(commands.env().adminLogin);
    appActions.login.fillPassword(commands.env().defaultPassword);
    appActions.login.buttonClick();
  });

});
