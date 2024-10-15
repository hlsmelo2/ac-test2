import { commands } from "../../commands";
import { appElements } from "./elements";

export const appActions = {
    app: {
        gotoLogin() {
            cy.visit('/login');
        },
        gotoRegister() {
            cy.visit('/login');
            appActions.register.clickMenu();
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
            appElements.register.email().type(commands.getSafe(text, commands.getPassword()));
        },
        fillRePassword(text) {
            appElements.register.email().type(commands.getSafe(text, commands.getPassword()));
        },
        buttonClick() {
            appElements.register.button().click();
        },
    },
    login: {
        checkTitle() {
            appElements.login.title()
                .should('be.visible')
                .should('equal', 'Login');
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
};
