import { Register } from "/cypress/support/system/app/tests/register";
import { commands } from "/cypress/support/commands";

const register = new Register({
    messages: {
        describe: 'Register user with empty email',
        itRegister: 'Fill name and password and try register',
        alert: 'Error to try register',
    },
    data: {
        name: commands.getUserName(),
        email: '',
        password: commands.env().defaultPassword,
        rePassword: commands.env().defaultPassword,
        checkLoginPage: false,
    },
});
