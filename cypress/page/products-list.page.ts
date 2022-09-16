class ProductListPage {
    private addToCartButton: string;
    private proceedToCheckOutButton: string;

    constructor() {
        this.addToCartButton = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.proceedToCheckOutButton = "[style*='display: block;'] .button-container > a";
    }

    public addToCart(): void {
        cy.get(this.addToCartButton).click();
        cy.get(this.proceedToCheckOutButton).click();
    }
}

export { ProductListPage }
