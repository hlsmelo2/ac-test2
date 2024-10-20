import { Register } from "/cypress/support/system/app/tests/register";
import { commands } from "/cypress/support/commands";

const register = new Register({
    messages: {
        describe: 'Register user with empty password',
        itRegister: 'Fill name, email and rePassword and try register',
        alert: 'The password fields should have the same value',
    },
    data: {
        name: commands.getUserName(),
        email: commands.getNewEmail(),
        password: '',
        rePassword: commands.env().defaultPassword,
        checkLoginPage: false,
    },
});
