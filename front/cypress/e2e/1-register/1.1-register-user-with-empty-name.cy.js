import { Register } from "/cypress/support/system/app/tests/register";
import { commands } from "/cypress/support/commands";

const register = new Register({
    messages: {
        describe: 'Register user with empty name',
        itRegister: 'Fill email and password and try register',
        alert: 'Error to try register',
    },
    data: {
        name: '',
        email: commands.env().adminLogin,
        password: commands.env().defaultPassword,
        rePassword: commands.env().defaultPassword,
        checkLoginPage: false,
    },
});
