import { commands } from "/cypress/support/commands";
import { appActions } from "/cypress/support/system/app/actions";

describe('Register user with wrong name', () => {
  beforeEach(() => {
    appActions.app.gotoRegister();
  });

  it('Fill correct fields except name and try register', () => {
    appActions.register.fillName('WRONG');
    appActions.register.fillEmail(commands.getNewEmail());
    appActions.register.fillPassword(commands.env().defaultPassword);
    appActions.register.fillRePassword(commands.env().defaultPassword);
    appActions.register.buttonClick();
    appActions.login.checkPage();
  });
});
