class AddressStepPage {
    private addressContinueCheckout: string;

    constructor() {
        this.addressContinueCheckout = ".cart_navigation > .button > span";
    }

    public addressCheckout(): void {
        cy.get(this.addressContinueCheckout).click();
    }
}

export { AddressStepPage }
