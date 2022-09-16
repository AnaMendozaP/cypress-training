class PaymentStepPage {
    private bankWireClick: string;
    private proceedToPayClick: string;
    private messagePaymentComplete: string;

    constructor() {
        this.bankWireClick = ".bankwire";
        this.proceedToPayClick = "#cart_navigation > .button > span";
        this.messagePaymentComplete = "#center_column > div > p > strong";

    }

    public paymentSuccessfully(): void {
            cy.get(this.bankWireClick).click();
            cy.get(this.proceedToPayClick).click();
            cy.get(this.messagePaymentComplete).should(
                  "have.text","Your order on My Store is complete.");
    }
}

export { PaymentStepPage }
