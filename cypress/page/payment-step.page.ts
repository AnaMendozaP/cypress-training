class PaymentStepPage {
    private bankWire: string;
    private proceedToPayClick: string;
    private messagePaymentComplete: string;

    constructor() {
        this.bankWire = ".bankwire";
        this.proceedToPayClick = "#cart_navigation > .button > span";
        this.messagePaymentComplete = "#center_column > div > p > strong";

    }

    public selectBankWire(): void {
            cy.get(this.bankWire).click();              
    }

    public confirmOrder(): void {
            cy.get(this.proceedToPayClick).click();
    }

    public getConfirmationMessage() {
            return cy.get(this.messagePaymentComplete);
    }
}

export { PaymentStepPage }
