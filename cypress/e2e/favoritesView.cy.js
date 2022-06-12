describe('Pyrex home page view', () => {
  beforeEach(() => {
    cy.intercept("http://localhost:3001/api/v1/patterns", { fixture: "favorites.json"})
    cy.intercept("http://localhost:3001/api/v1/favorites", { fixture: "favorites.json"})
    cy.visit('http://localhost:3000/favorites', {timeout: 2000})
  });

  it('Should have a favorites title', () => {
    cy.get('.favs-title')
    .contains('Favorites')
  })

  it('Should have three patterns', () => {
    cy.get('.favorites-detail')
    .should('have.length', 3)
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

  it('Should have the pattern disappear when the delete button is clicked', () => {
    cy.get('.delete-from-favorites')
    .eq(0).dblclick()
    cy.get('.favorites-detail')
    .should('have.length', 2)


  })


});
