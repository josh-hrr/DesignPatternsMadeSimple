class Cart { 

    cartList = {
        cartItem: '.cart_item',
        cartItemName: '.cart_item .inventory_item_name',
        cartItemPrice: '.cart_item .inventory_item_price',
        cartItemDesc: '.cart_item .inventory_item_desc', 
        cartItemRemoveAll: '.btn_secondary.cart_button',
    }

    cartSingleItem = {
        cartItem: '.cart_item',
        cartItemName: '.cart_item:nth-child(3) .inventory_item_name',
        cartItemPrice: '.cart_item:nth-child(3) .inventory_item_price',
        cartItemDesc: '.cart_item:nth-child(3) .inventory_item_desc', 
        cartItemRemoveAll: '.cart_item:nth-child(3) .btn_secondary.cart_button', 
    }

    cartButtons = {
        cartItemContinueShopping: () => cy.get('#continue-shopping'),
        cartItemCheckout: () => cy.get('.btn_action.checkout_button'),
    }

    clickCheckoutBtn() {
        this.cartButtons.cartItemCheckout().click();
    }

    clickContinueShoppingBtn() {
        this.cartButtons.cartItemContinueShopping().click();
    }

}

export default Cart;