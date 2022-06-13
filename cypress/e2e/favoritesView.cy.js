describe('Pyrex home page view', () => {
  beforeEach(() => {
    cy.intercept("http://localhost:3001/api/v1/patterns", { fixture: "patterns.json"})
    cy.intercept("http://localhost:3001/api/v1/favorites", { fixture: "patterns.json"})
    cy.visit('http://localhost:3000/favorites', {timeout: 2000})
  });

  it('Should have a favorites title', () => {
    cy.get('.favs-title')
    .contains('Favorites')
  })

  it('Should have five patterns', () => {
    cy.get('.favorites-detail')
    .should('have.length', 5)
  });

  it('Should have a button to go to the home page', () => {
    cy.get('.nav-button')
    .eq(0)
  });

  it('Should not have a favorites button', () => {
    cy.get('.active')
    .should('not.exist')
  });

  it('Should have a button to delete from favorites', () => {
    cy.get('.delete-from-favorites')
  });

  it('Should display a message if an invalid URL is entered', () => {
  cy.intercept("GET", 'http://localhost:3001/api/v1/patterns/jibberish', {
      statusCode: 500,
      body: {
      message: 'Server error. Please try again'
      }
    })

  cy.visit('http://localhost:3000/jibberish')
  cy.get('h2').contains('Looks like you took a wrong turn, click Home to go back!')

  });

  it('Should be able to click on the delete button', () => {
    cy.get('.delete-from-favorites')
    .eq(0).dblclick()
    cy.get('.favorites-detail')
  });
});
