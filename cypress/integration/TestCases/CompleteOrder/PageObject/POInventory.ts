class POInventory {   
    singleProduct = {
        selectProduct: () => cy.get(".inventory_list .inventory_item:nth-child(1)"),
        selectProductImg: () => cy.get(".inventory_list .inventory_item:nth-child(1) .inventory_item_img"),
        selectProductTitle: () => cy.get(".inventory_list .inventory_item:nth-child(1) .inventory_item_name "),
        selectProductPrice: () => cy.get(".inventory_list .inventory_item:nth-child(1) .inventory_item_price"),
        selectProductAddToCartBtn: () => cy.get(".inventory_list .inventory_item:nth-child(1) #add-to-cart-sauce-labs-backpack"),
    }

    addProductToCart() {
        this.singleProduct.selectProduct().trigger('mouseover');
        this.singleProduct.selectProductAddToCartBtn().click();  
    }    
}

export default POInventory;