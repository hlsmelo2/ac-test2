import { commands } from "/cypress/support/commands";
import { appActions } from "/cypress/support/system/app/actions";

describe('Login user with wrong email', () => {

  beforeEach(() => {
    appActions.app.gotoLogin();
  });

  it('Fill wrong email and try login', () => {
    appActions.login.fillEmail('WRONG');
    appActions.login.fillPassword(commands.env().defaultPassword);
    appActions.login.buttonClick();
  });

});
