import { LoginCreatorSingleton } from "../../DesignPatterns/Singleton/LoginCreatorSingleton"; 

describe("TCLoginData-Driven Suite", () => {  
    let testData: any;
    beforeEach( () => {
        cy.visit("/");    
        cy.fixture("data.json").then((data: any) => { 
            testData = data;
        }); 

    });     
    it("should login successfully", () => { 
        const loginCreator = LoginCreatorSingleton.getInstance(true); 
        loginCreator.performLogin(testData[0].username, testData[0].password);
        cy.get(".title").should("contain", "Products"); 
    });     

    it("should login unsuccessfully", () => {
        const loginCreator = LoginCreatorSingleton.getInstance(false);
        loginCreator.performLogin(testData[1].username, testData[1].password);
        cy.get(".login-box div:nth-child(3)").should("have.class", "error").and("contain", "Username and password do not match"); 
    });
});