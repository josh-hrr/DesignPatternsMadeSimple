
import { LoginCreatorSingleton } from "../DesignPatterns/Singleton/LoginCreatorSingleton"; 

describe("TCLoginSuite", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("should login successfully", () => { 
        const loginCreator = LoginCreatorSingleton.getInstance(true);
        loginCreator.performLogin("standard_user", "secret_sauce");
        cy.get(".title").should("contain", "Products");
    })

    it("should login unsuccessfully", () => {
        const loginCreator = LoginCreatorSingleton.getInstance(false);
        loginCreator.performLogin("locked_out_user", "wrongPass");
        cy.get(".login-box div:nth-child(3)").should("have.class", "error").and("contain", "Username and password do not match"); 
    })  
})