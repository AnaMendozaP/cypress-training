import {MenuContentPage} from "../page/index";
import {ProductListPage} from "../page/index";
import {ShoppingCartPage} from "../page/index";
import {LoginPage} from "../page/index";
import {AddressStepPage} from "../page/index";
import {ShippingStepPage} from "../page/index";
import {PaymentStepPage} from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shoppingToCart = new ShoppingCartPage();
const loginPage = new LoginPage();
const addresStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.addToCart();
    shoppingToCart.proceedToCheckout();
    loginPage.logginPageSignIn();
    addresStepPage.addressCheckout();
    shippingStepPage.addressCheckout();
    paymentStepPage.paymentSuccessfully();
  });
});
