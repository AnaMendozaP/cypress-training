class ShoppingCartPage { 
    private cartNavigationCheckoutButton: string;

    constructor() {
        this.cartNavigationCheckoutButton = ".cart_navigation span";
    }

    public proceedToCheckout(): void {
        cy.get(this.cartNavigationCheckoutButton).click();
    }
}

export { ShoppingCartPage }
