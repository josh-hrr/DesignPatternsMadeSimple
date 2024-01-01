class POCheckoutComplete {
    confirmatinInfo = {
        title: () => cy.get('.complete-header'),
        desc: () => cy.get('.complete-text'),
        img: () => cy.get('.pony_express'), 
    }
    confirmationBtn = {
        backHomeBtn: () => cy.get('#back-to-products'),
    }

    clickBackHomeBtn() {
        this.confirmationBtn.backHomeBtn().click();
    }

    getConfirmationTitle() {
        return this.confirmatinInfo.title().invoke("text").then((text) => {
            return text.trim();
        });
    }  
    getConfirmationDesc() {
        return this.confirmatinInfo.desc().invoke("text").then((text) => {
            return text.trim();
        });
    }
    
}

export default POCheckoutComplete;