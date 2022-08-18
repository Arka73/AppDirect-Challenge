describe("API test", () => {

  it("List Users", () => {
    cy.fixture("listUsers").then(listUsers => {
        cy.request("GET", "https://reqres.in/api/users?page=2").then((response) =>{
            cy.wrap(response).its("body").should("deep.eq", listUsers)
            cy.wrap(response).its("status").should("equal", 200)
            cy.wrap(response).its("body.per_page").then((six) =>{
                cy.wrap(response).its("body.data.length").should("equal", six)
            })
        })
    })
});

  it("Single List", () => {
    cy.fixture("singleList").then(singleList => {
        cy.request("GET", "https://reqres.in/api/users/2").then((response) =>{
            cy.wrap(response).its("body").should("deep.eq", singleList)
            cy.wrap(response).its("status").should("equal", 200)
        })
    })
    cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users/66',
        failOnStatusCode: false
    }).then((response) =>{
        cy.wrap(response).its("status").should("equal", 404)
        cy.wrap(response).its("body").should("deep.eq", {})
    })
  });
});
