class POCheckoutOverview {
    overviewItems = {
        cartSingleItem: () => cy.get(".cart_item:nth-child(3)"),
        cartSingleItemPrice: () => cy.get(".cart_item:nth-child(3) .inventory_item_price"),
        totalSummary: () => cy.get(".summary_total_label"),
    } 
    overviewButtons = {
        finishBtn: () => cy.get("#finish"),
        cancelBtn: () => cy.get("#cancel"),
    } 

    getSingleItemPrice() {
        return this.overviewItems.cartSingleItemPrice().invoke("text").then((text) => {
            return text.trim();
        });
    }

    getTotalSummary() {
        return this.overviewItems.totalSummary().invoke("text").then((text) => {
            return text.trim();
        });
    }

    clickFinishBtn() {
        this.overviewButtons.finishBtn().click();
    }

    clickCancelBtn() {
        this.overviewButtons.cancelBtn().click();
    }
}

export default POCheckoutOverview;