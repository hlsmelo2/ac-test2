import { Register } from "/cypress/support/system/app/tests/register";
import { commands } from "/cypress/support/commands";

const register = new Register({
    messages: {
        describe: 'Register user with wrong rePassword',
        itRegister: 'Fill correct fields except rePassword and try register',
        alert: 'The password fields should have the same value',
    },
    data: {
        name: commands.getUserName(),
        email: commands.getNewEmail(),
        password: commands.env().defaultPassword,
        rePassword: 'WRONG',
        checkLoginPage: false,
    },
});
