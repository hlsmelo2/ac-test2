import { commands } from "/cypress/support/commands";
import { appActions } from "/cypress/support/system/app/actions";

describe('Register user with all correct fields', () => {
  beforeEach(() => {
    appActions.app.gotoRegister();
  });

  it('Fill correct fields except rePassword and try register', () => {
    appActions.register.fillName(commands.getUserName());
    appActions.register.fillEmail(commands.env().adminLogin);
    appActions.register.fillPassword(commands.env().defaultPassword);
    appActions.register.fillRePassword('WRONG');
    appActions.register.buttonClick();
  });
});
