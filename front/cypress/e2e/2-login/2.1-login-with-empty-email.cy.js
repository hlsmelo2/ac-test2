import { Login } from "/cypress/support/system/app/tests/login";
import { commands } from "/cypress/support/commands";

const login = new Login({
    messages: {
        describe: 'Login user with empty email',
        itLogin: 'Fill password and try login',
        alert: 'Error to try login',
    },
    data: {
        email: '',
        password: commands.env().defaultPassword,
        checkTransfersPage: false,
    },
});
