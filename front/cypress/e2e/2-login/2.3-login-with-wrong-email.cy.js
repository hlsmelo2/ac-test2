import { Login } from "/cypress/support/system/app/tests/login";
import { commands } from "/cypress/support/commands";

const login = new Login({
    messages: {

        describe: 'Login user with wrong email',
        itLogin: 'Fill wrong email and try login',
        alert: 'Error to try login',
    },
    data: {
        email: 'WRONG',
        password: commands.env().defaultPassword,
        checkTransfersPage: false,
    },
});
