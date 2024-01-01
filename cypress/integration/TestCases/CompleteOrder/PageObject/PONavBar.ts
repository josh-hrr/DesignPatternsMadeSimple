class PONavBar {
    navBar = {
        allItemsBtn: () => cy.get("#inventory_sidebar_link"),
        aboutBtn: () => cy.get("#about_sidebar_link"),
        logoutBtn: () => cy.get("#logout_sidebar_link"),
        resetAppStateBtn: () => cy.get("#reset_sidebar_link"),
        closeMenuBtn: () => cy.get("#react-burger-cross-btn"),
    }
}

export default PONavBar;