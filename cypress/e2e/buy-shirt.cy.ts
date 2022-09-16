import {
  MenuContentPage,
  ProductListPage,
  ShoppingCartPage,
  LoginPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shoppingToCart = new ShoppingCartPage();
const signInPage = new LoginPage();
const addresStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.addToCart();
    shoppingToCart.proceedToCheckout();
    signInPage.signIn("aperdomobo@gmail.com", "WorkshopProtractor");
    addresStepPage.addressCheckout();
    shippingStepPage.agreeTerms();
    shippingStepPage.shippingCheck();
    paymentStepPage.selectBankWire();
    paymentStepPage.confirmOrder();
    paymentStepPage.getConfirmationMessage().should(
        "have.text", "Your order on My Store is complete.");
  });
});
