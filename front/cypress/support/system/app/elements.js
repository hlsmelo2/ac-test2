import { commands } from "../../commands";

export const appElements = {
    register: {
        menuItem() {
            return commands.get('#main-menu a').contains('Register');
        },
        title() {
            return commands.get('#register h1');
        },
        name() {
            return commands.get('#register #name');
        },
        email() {
            return commands.get('#register #email');
        },
        password() {
            return commands.get('#register #password');
        },
        rePassword() {
            return commands.get('#register #re-password');
        },
        button() {
            return commands.get('#register button').contains('Register');
        },
    },
    login: {
        title() {
            return commands.get('#login h1');
        },
        email() {
            return commands.get('#login #email');
        },
        password() {
            return commands.get('#login #password');
        },
        button() {
            return commands.get('#login button').contains('Login');
        },
    },
    transfers: {
        title() {
            return commands.get('#transfers h1');
        },
        balance() {
            return commands.get('#transfers #balance');
        },
        buttonMakeDeposit() {
            return commands.get('#transfers #make-deposit');
        },
        buttonSendTransfer() {
            return commands.get('#transfers #send-transfer');
        },
        filterDeposit() {
            return commands.get('#transfers .filters .deposit');
        },
        filterAll() {
            return commands.get('#transfers .filters .all');
        },
        filterReceived() {
            return commands.get('#transfers .filters .received');
        },
        filterSended() {
            return commands.get('#transfers .filters .sended');
        },
        list() {
            return commands.get('#transfers table');
        },
    },
    users: {
        title() {
            return commands.get('#users h1');
        },
        list() {
            return commands.get('#users table');
        },
        buttonDetails() {
            return commands.get('#users a.details');
        },
        buttonDelete() {
            return commands.get('#users a.delete');
        },
    },
};