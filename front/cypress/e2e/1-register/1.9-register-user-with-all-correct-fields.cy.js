import { commands } from "/cypress/support/commands";
import { appActions } from "/cypress/support/system/app/actions";

describe('Register user with wrong rePassword', () => {
  beforeEach(() => {
    appActions.app.gotoRegister();
  });

  it('Fill all correct fields and try register', () => {
    appActions.register.fillName(commands.getUserName());
    appActions.register.fillEmail(commands.env().adminLogin);
    appActions.register.fillPassword(commands.env().defaultPassword);
    appActions.register.fillRePassword(commands.env().defaultPassword);
    appActions.register.buttonClick();
  });
});
