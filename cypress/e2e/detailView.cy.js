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
    .should('equal', "http://localhost:3000/patterns/1", {timeout: 5000})
    // cy.intercept("http://localhost:3001/api/v1/patterns/1", { fixture: "patterns.json"})
    cy.visit('http://localhost:3000/patterns/1', {timeout: 5000})
  });

  it('Should have one tile', () => {
    cy.get('.main-section')
    .eq(0)
    .should('have.length', 1)
    cy.get('.add-to-favorites')
    cy.get('.patterns-container')
    .should('not.exist')
    cy.get('.add-to-favorites')
    .eq(0)
    .contains('Add To Favorites')
  });

it('Should have two buttons in the NavBar', () => {
  cy.get('.nav-button')
  .eq(0)
  .contains('See All Patterns')
  cy.get('.nav-button')
  .eq(1)
  .contains('Favorites')
});

it('Should be able to click on the see all patterns button and go home', () => {
      cy.intercept("http://localhost:3001/api/v1/favorites", { fixture: "patterns.json"})
  cy.get('.nav-button')
  .eq(0).click()
  cy.url()
  .should('equal', "http://localhost:3000/")
});

it('Should be able to click on the favorites button and go to favorites', () => {
      cy.intercept("http://localhost:3001/api/v1/favorites", { fixture: "patterns.json"})
  cy.get('.nav-button')
  .eq(1).click()
  cy.url()
  .should('equal', "http://localhost:3000/favorites")
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

describe ('Pyrex add favorite', () => {
//   beforeEach(() => {
//     // cy.intercept("http://localhost:3001/api/v1/patterns/1", { fixture: "patterns.json"})
//     // cy.visit('http://localhost:3000/patterns/36', {timeout: 5000})
//
// });

it('Should add the pattern to favorites when button is clicked', () => {
  // cy.visit("http://localhost:3001/api/v1/patterns")
  // cy.intercept("http://localhost:3001/api/v1/patterns/36", { fixture: "patterns.json"})

  cy.visit('http://localhost:3000', {timeout: 2000})
  cy.get('.tile')
  .eq(35)
  cy.get('.see-more')
  .eq(35)
  .contains('Click here for more options!').click()
  cy.url()
  .should('equal', "http://localhost:3000/patterns/36", {timeout: 5000})
  cy.get('.add-to-favorites')
  .eq(0).click()
  cy.get('.nav-button')
  .eq(1).click()
  cy.url()
  .should('equal', "http://localhost:3000/favorites")
  cy.get('.favorites-detail')
  .should('have.length', 5)
});
});
// it('Should get to the page where a pattern can be added to the favorites', () => {
//   cy.get('.tile')
//   .eq(35)
//
//   cy.get('.see-more')
//   .eq(35)
//   .contains('Click here for more options!').click()
//
// });
// it('Should be able to click on the button and go to a new view', () => {
//   cy.intercept("http://localhost:3001/api/v1/patterns/36", { fixture: "oneFetch.json"})
//   cy.get('button')
//   .eq(0).click()
//   cy.url()
//   .should('equal', "http://localhost:3000/patterns/36")
//   cy.get('.tile')
//   .should('not.exist')
//   cy.get('.pattern-detail')
//   .should('exist')
//   cy.get('.add-to-favorites')
// });
