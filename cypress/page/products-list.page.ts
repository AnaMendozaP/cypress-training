class ProductListPage {
    private addToCartButton: string;

    constructor() {
        this.addToCartButton = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
    }

    public addToCart(): void {
        cy.get(this.addToCartButton).click();
    }
}

export { ProductListPage }
