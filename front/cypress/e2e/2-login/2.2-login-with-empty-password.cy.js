import { commands } from "/cypress/support/commands";
import { appActions } from "/cypress/support/system/app/actions";

describe('Login user with empty password', () => {

  beforeEach(() => {
    appActions.app.gotoLogin();
  });

  it('Fill email and try login', () => {
    appActions.login.fillEmail(commands.env().adminLogin);
    appActions.login.buttonClick();
  });

});
