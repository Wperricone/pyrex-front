describe('Pyrex home page view', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/", { fixture: "patterns.json"})
    cy.visit('http://localhost:3000/')
  });

it('Should have a title', () => {
  cy.get('.site-title')
  .should('exist')
  .contains('Welcome to Pyrex Party!')
});

it('Should contain 3 patterns', () => {
  cy.get('.patterns-container').children()
  .should('have.length', 3)
});

});
