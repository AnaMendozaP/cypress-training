class ShoppingCartPage {
    private proceedToCheckOutButton: string;
    private cartNavigationCheckoutButton: string;

    constructor() {
        this.proceedToCheckOutButton = "[style*='display: block;'] .button-container > a";
        this.cartNavigationCheckoutButton = ".cart_navigation span";
    }

    public proceedToCheckout(): void {
        cy.waitUntil(() => {
            return cy.get(this.proceedToCheckOutButton, {timeout: 10000}).should("be.visible");
            });
        cy.get(this.proceedToCheckOutButton).click();
        cy.get(this.cartNavigationCheckoutButton).click();
    }
}

export { ShoppingCartPage }
