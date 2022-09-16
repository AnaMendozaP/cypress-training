class ShippingStepPage {
    private shippingContinueCheck: string;
    private agreeTermsCheck: string;

    constructor() {
        this.shippingContinueCheck = ".cart_navigation > .button > span";
        this.agreeTermsCheck = "#cgv";

    }

    public agreeTerms(): void {
            cy.get(this.agreeTermsCheck).check();
    }

    public shippingCheck(): void {
        cy.get(this.shippingContinueCheck).click();
    } 
}

export { ShippingStepPage }
