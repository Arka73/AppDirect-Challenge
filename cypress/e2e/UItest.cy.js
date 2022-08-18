import { MainPage } from "../support/pageObjects/UITest";

describe("End to end test", () => {

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
    MainPage.logInUserByNameAndPassword("U2", "U2");
    cy.wait(1234);
  });

  it("Login and Logout", () => {
    MainPage.userName.should("contain", "Welcome U2");
    MainPage.logInButton.should("not.be.visible");
    MainPage.logOutButton.should("be.visible");
    MainPage.clickLogOutButton();
    MainPage.logInButton.should("be.visible");
    MainPage.logOutButton.should("not.be.visible");
    MainPage.logInUserByNameAndPassword("U3", "U4");
  });

  it("Shopping Cart", () => {
    MainPage.clickCartButton();
    MainPage.cartHasItems.should("not.exist");
    MainPage.logOutButton.should("be.visible");
    MainPage.clickHomeButton();
    MainPage.clickFirstItemTitle();
    MainPage.logOutButton.should("be.visible");
    MainPage.clickAddToCartButton();
    MainPage.clickCartButton();
    MainPage.cartHasItems.should("be.visible");
    MainPage.deleteFromCartButton();
  });
});
