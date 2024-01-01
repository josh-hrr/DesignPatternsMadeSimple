class POHeader {
    header = {
        headerTitle: () => cy.get("#header_container .primary_header .header_label .app_logo"),
        hamburgerMenu: () => cy.get("#react-burger-menu-btn"),
        shoppingCartBtn: () => cy.get("#shopping_cart_container"),
    }

    clickHamburgerMenu() {
        this.header.hamburgerMenu().click();
    } 
    clickShoppingCartBtn() {
        this.header.shoppingCartBtn().click();
    } 

}

export default POHeader;