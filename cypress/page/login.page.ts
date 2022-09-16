class LoginPage {
    private loginEmailInput: string;
    private loginPasswordInput: string;
    private loginPageButton: string;

    constructor() {
        this.loginEmailInput = "#email";
        this.loginPasswordInput = "#passwd";
        this.loginPageButton ="[id=\"SubmitLogin\"]";

    }

    public signInPage(email: string, password: string): void {
        cy.get(this.loginEmailInput).type(email);
        cy.get(this.loginPasswordInput).type(password);
        cy.get(this.loginPageButton).click();
    }
}

export { LoginPage }
