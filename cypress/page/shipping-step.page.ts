class ShippingStepPage {
    private addressContinueCheckout: string;
    private agreeTermsCheck: string;

    constructor() {
        this.addressContinueCheckout = ".cart_navigation > .button > span";
        this.agreeTermsCheck = "#cgv";

    }

    public addressCheckout(): void {
            cy.get(this.agreeTermsCheck).check();
            cy.get(this.addressContinueCheckout).click();
    }
}

export { ShippingStepPage }
