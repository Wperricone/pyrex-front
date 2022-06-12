describe('Pyrex detail page view', () => {
  beforeEach(() => {
    cy.intercept("http://localhost:3001/api/v1/patterns", { fixture: "patterns.json"})
    cy.intercept("http://localhost:3001/api/v1/patterns/1", { fixture: "patterns.json"})

    cy.visit('http://localhost:3000', {timeout: 2000})
    cy.get('.tile')
    .eq(0)
    cy.get('.see-more')
    .contains('Click here for more options!').click()
    cy.url()
    .should('equal', "http://localhost:3001/api/v1/patterns/1")
    // cy.intercept("http://localhost:3001/api/v1/patterns/1", { fixture: "patterns.json"})
    cy.visit('http://localhost:3000/patterns/1', {timeout: 2000})
  });

it('Should have one tile', () => {
  cy.get('.pattern-detail').children()
  .should('have.lengeth', 1)
});

it('Should display a 404 message if an invalid URL is entered', () => {
cy.intercept("GET", 'http://localhost:3001/api/v1/patterns/jibberish', {
    statusCode: 500,
    body: {
    message: 'Server error. Please try again'
    }
  })

cy.visit('http://localhost:3000/jibberish')
cy.get('h2').contains('Looks like you took a wrong turn, click Home to go back!')

});

});
