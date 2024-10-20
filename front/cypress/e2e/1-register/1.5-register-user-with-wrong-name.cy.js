import { Register } from "/cypress/support/system/app/tests/register";
import { commands } from "/cypress/support/commands";

const register = new Register({
    messages: {
        describe: 'Register user with wrong name',
        itRegister: 'Fill correct fields except name and try register',
        alert: '',
    },
    data: {
        name: 'WRONG',
        email: commands.getNewEmail(),
        password: commands.env().defaultPassword,
        rePassword: commands.env().defaultPassword,
        checkLoginPage: true,
    },
});
