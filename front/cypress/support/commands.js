// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

export const commands = {
    env(property) {
        return (Cypress.env()[property] !== undefined) ? Cypress.env()[property] : Cypress.env();
    },
    get(query) {
        return cy.get(query);
    },
    getSafe(value, value2) {
        return value !== undefined ? value : value2;
    },
    getTime() {
        return (new Date()).getTime();
    },
    getNewEmail() {
        const prefix = this.env().defaultUser;
        const user = prefix + this.getTime();

        return `${user}@${prefix}.com`;
    },
    getUserName() {
        return this.env().defaultUser + this.getTime();
    },
    getPassword() {
        return this.env().defaultPassword;
    },
}

Cypress.Commands.overwrite('type', (source, input, value) => {
    if (value === '') {
        return false;
    }

    return source(input, value);
});