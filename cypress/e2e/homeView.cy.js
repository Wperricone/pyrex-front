describe('Pyrex home page view', () => {
  beforeEach(() => {
    cy.intercept("http://localhost:3001/api/v1/patterns", { fixture: "patterns.json"})
    cy.visit('http://localhost:3000', {timeout: 2000})
  });

it('Should have a title', () => {
  cy.get('.site-title')
  .should('exist')
  .contains('Welcome to Pyrex Party!')
});

it('Should contain 3 patterns', () => {
  cy.get('.patterns-container', {timeout: 5000}).children()
  .should('have.length', 3)
});

it('Should have a favorites button', () => {
  cy.get('.fav-button')
  .contains('Favorites')
});

it('Should have a title in each tile', () => {
  cy.get('.tile')
  .contains('Gooseberry')
});

});
