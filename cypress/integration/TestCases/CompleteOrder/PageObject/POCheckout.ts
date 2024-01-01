class POCheckout {
    checkoutForm = {
        firstName: () => cy.get('#first-name'),
        lastName: () => cy.get('#last-name'),
        postalCode: () => cy.get('#postal-code'),
    }

    checkoutButtons = {
        continueBtn: () => cy.get('#continue'),
        checkoutBtn: () => cy.get('#checkout'),
        cancelBtn: () => cy.get('#cancel'), 
    } 

    inputFirstName(firstName: string) {
        this.checkoutForm.firstName().type(firstName);
    }

    inputLastName(lastName: string) {
        this.checkoutForm.lastName().type(lastName);
    }

    inputPostalCode(postalCode: string) {
        this.checkoutForm.postalCode().type(postalCode);
    }

    performCheckout(firstName: string, lastName: string, postalCode: string) {
        this.inputFirstName(firstName);
        this.inputLastName(lastName);
        this.inputPostalCode(postalCode);
        this.clickContinueBtn();
    } 
    
    clickCheckoutBtn() {
        this.checkoutButtons.checkoutBtn().click();
    }

    clickContinueBtn() {
        this.checkoutButtons.continueBtn().click();
    }
    

    clickCancelBtn() {
        this.checkoutButtons.cancelBtn().click();
    }
}

export default POCheckout;