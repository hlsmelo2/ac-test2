import { Register } from "/cypress/support/system/app/tests/register";
import { commands } from "/cypress/support/commands";

const register = new Register({
    messages: {
        describe: 'Register user with all correct fields',
        itRegister: 'Fill all correct fields and try register',
        alert: '',
    },
    data: {
        name: commands.getUserName(),
        email: commands.getNewEmail(),
        password: commands.env().defaultPassword,
        rePassword: commands.env().defaultPassword,
        checkLoginPage: true,
    },
});
