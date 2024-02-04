import POLogin from "../PageObject/POLogin";
import POInventory from "../PageObject/POInventory";
import POHeader from "../PageObject/POHeader";
import POCheckout from "../PageObject/POCheckout";
import POCheckoutOverview from "../PageObject/POCheckoutOverview";
import POCheckoutComplete from "../PageObject/POCheckoutComplete"; 

let username:string = "standard_user";
let password:string = "secret_sauce";
let loginPage;
let inventoryPage;
let headerPage;
let checkoutPage;
let checkoutOverviewPage;
let checkoutCompletePage;

describe('Complete Order', () => {
    beforeEach(() => {
        cy.visit("/");  
    });
    
    it('should complete an end-to-end order successfully', () => {  
        loginPage = new POLogin();
        loginPage.performLogin(username, password);
        cy.url().should("contain", "inventory.html");

        inventoryPage = new POInventory();
        inventoryPage.addProductToCart();

        headerPage = new POHeader();
        headerPage.clickShoppingCartBtn();

        checkoutPage = new POCheckout();
        checkoutPage.clickCheckoutBtn();
        checkoutPage.performCheckout("John", "Doe", "12345");

        checkoutOverviewPage = new POCheckoutOverview();
        checkoutOverviewPage.clickFinishBtn();

        checkoutCompletePage = new POCheckoutComplete();
        checkoutCompletePage.getConfirmationTitle().should("contain", "Thank you for your order");
        checkoutCompletePage.getConfirmationDesc().should("contain", "Your order has been dispatched, and will arrive just as fast as the pony can get there!");
        checkoutCompletePage.clickBackHomeBtn();
    });         
});

//review
// review 2.0
