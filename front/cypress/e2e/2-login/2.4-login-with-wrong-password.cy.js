import { Login } from "/cypress/support/system/app/tests/login";
import { commands } from "/cypress/support/commands";

const login = new Login({
    messages: {
        describe: 'Login user with empty email',
        itLogin: 'Fill wrong password and try login',
        alert: 'Error to try login',
    },
    data: {
        email: commands.env().adminLogin,
        password: 'WRONG',
        checkTransfersPage: false,
    },
});
