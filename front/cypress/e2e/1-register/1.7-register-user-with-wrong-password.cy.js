import { commands } from "/cypress/support/commands";
import { appActions } from "/cypress/support/system/app/actions";

describe('Register user with wrong password', () => {
  beforeEach(() => {
    appActions.app.gotoRegister();
  });

  it('Fill correct fields except password and try register', () => {
    appActions.register.fillName(commands.getUserName());
    appActions.register.fillEmail(commands.env().adminLogin);
    appActions.register.fillPassword('WRONG');
    appActions.register.fillRePassword(commands.env().defaultPassword);
    appActions.register.buttonClick();
  });
});
