import { Login } from "/cypress/support/system/app/tests/login";
import { commands } from "/cypress/support/commands";

const login = new Login({
    messages: {
        describe: 'Login with correct credentials',
        itLogin: 'Fill correct credentials and try login',
        alert: '',
    },
    data: {
        email: commands.env().adminLogin,
        password: commands.env().defaultPassword,
        checkTransfersPage: true,
    },
});
