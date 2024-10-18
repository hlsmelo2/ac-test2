import { commands } from "../../commands";
import { appElements } from "./elements";

export const appActions = {
    app: {
        gotoLogin() {
            cy.visit('/login');
            cy.wait(500);
        },
        gotoRegister() {
            this.gotoLogin()
            appActions.register.clickMenu();
        },
        checkAlertMessage(message) {
            appElements.app.alert()
                .should('be.visible')
                .should('have.text', message);
        },
    },
    register: {
        clickMenu() {
            appElements.register.menuItem().click();
        },
        checkTitle() {
            appElements.register.title()
                .should('be.visible')
                .should('equal', 'Cadastrar usuário');
        },
        fillName(text) {
            appElements.register.name().type(commands.getSafe(text, commands.getUserName()));
        },
        fillEmail(text) {
            appElements.register.email().type(commands.getSafe(text, commands.getNewEmail()));
        },
        fillPassword(text) {
            appElements.register.password().type(commands.getSafe(text, commands.getPassword()));
        },
        fillRePassword(text) {
            appElements.register.rePassword().type(commands.getSafe(text, commands.getPassword()));
        },
        buttonClick() {
            appElements.register.button().click();
        },
    },
    login: {
        checkPage() {
            this.checkTitle();

            appElements.login.email().should('be.visible');
            appElements.login.password().should('be.visible');
        },
        checkTitle() {
            appElements.login.title()
                .should('be.visible')
                .should('have.text', 'Login');
        },
        fillEmail(text) {
            appElements.login.email().type(commands.getSafe(text, commands.getNewEmail()));
        },
        fillPassword(text) {
            appElements.login.password().type(commands.getSafe(text, commands.getPassword()));
        },
        buttonClick() {
            appElements.login.button().click();
        },
    },
    transfers: {
        checkPage() {
            appElements.transfers.title()
                .should('be.visible')
                .should('have.text', 'Pagina de tranferencias');
            appElements.transfers.list().should('be.visible');
        },
    },
};
