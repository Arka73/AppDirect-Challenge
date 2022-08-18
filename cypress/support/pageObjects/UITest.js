import { waitForDebugger } from "inspector";

export class MainPageGo {

  get logInButton(){
    return cy.get("#login2");
  }

  get userName(){
    return cy.get("#nameofuser");
  }

  get logOutButton(){
    return cy.get("#logout2");
  }

  get cartHasItems(){
    return cy.get("#tbodyid tr");
  }

  clickLogInButton() {
    cy.get("#login2").click();
  }

  typeUserName(userName) {
    cy.get("#loginusername").type(userName);
  }

  typePassword(password) {
    cy.get("#loginpassword").type(password);
  }

  clickLogInSubmit() {
    cy.get("#logInModal .btn-primary").click();
  }

  clickLogOutButton() {
    this.logOutButton.click();
  }

  clickCartButton() {
    cy.get("#cartur").click();
  }

  clickHomeButton() {
    cy.get(".nav-link").contains("Home").click();
  }

  clickFirstItemTitle() {
    cy.get(".card-title a").first().click();
  }

  clickAddToCartButton() {
    cy.get(".btn-success").click();
  }

  deleteFromCartButton() {
    cy.get("a").contains("Delete").click();
  }

  logInUserByNameAndPassword(userName, password) {
    this.clickLogInButton();
    cy.wait(1234);
    this.typeUserName(userName);
    this.typePassword(password);
    this.clickLogInSubmit()
  }

}

export const MainPage = new MainPageGo;
