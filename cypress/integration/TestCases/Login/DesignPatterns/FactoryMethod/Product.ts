interface LoginCommand {
    execute(username: string, password: string): void;
} 
class SuccessfulLoginCommand implements LoginCommand{
    execute(username: string, password: string){
        cy.get("#user-name").type(username);
        cy.get("#password").type(password);
        cy.get("#login-button").click();
    }
} 
class UnsuccessfulLoginCommand implements LoginCommand{
    execute(username: string, password: string){
        cy.get("#user-name").type(username);
        cy.get("#password").type(password);
        cy.get("#login-button").click();
    }
}

export { LoginCommand, SuccessfulLoginCommand, UnsuccessfulLoginCommand }

