describe('Pyrex detail page view', () => {
  beforeEach(() => {
    cy.intercept("http://localhost:3001/api/v1/patterns", { fixture: "patterns.json"})
    cy.intercept("http://localhost:3001/api/v1/patterns/1", { fixture: "patterns.json"})

    cy.visit('http://localhost:3000', {timeout: 2000})
    cy.get('.tile')
    .eq(0)
    cy.get('.see-more')
    .contains('Click here for more options!').click()
    // cy.url()
    // .should('equal', "http://localhost:3001/api/v1/patterns/1")
    // cy.intercept("http://localhost:3001/api/v1/patterns/1", { fixture: "patterns.json"})
    cy.visit('http://localhost:3000/patterns/1', {timeout: 2000})
  });

it('Should have one tile', () => {
  cy.get('.pattern-detail').children()
  .should('have.lengeth', 1)
})

});
