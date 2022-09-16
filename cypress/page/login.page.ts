class LoginPage {
    private loginEmailInput: string;
    private loginPasswordInput: string;
    private loginPageButton: string;

    constructor() {
        this.loginEmailInput = "#email";
        this.loginPasswordInput = "#passwd";
        this.loginPageButton ="[id=\"SubmitLogin\"]";

    }

    public logginPageSignIn(): void {
        cy.get(this.loginEmailInput).type("aperdomobo@gmail.com");
        cy.get(this.loginPasswordInput).type("WorkshopProtractor");
        cy.get(this.loginPageButton).click();
    }
}

export { LoginPage }
