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

  it('Should contain 36 patterns', () => {
    cy.get('.patterns-container', {timeout: 5000}).children()
    .should('have.length', 36)
  });

  it('Should not have a see all patterns button', () => {
    cy.get('.active')
    .contains('See All Patterns')
  })

  it('Should have a favorites button', () => {
    cy.get('.nav-button')
    .contains('Favorites')
  });

  it('Should be able to click on the favorites button and go to favorites', () => {
        cy.intercept("http://localhost:3001/api/v1/favorites", { fixture: "patterns.json"})
    cy.get('.nav-button')
    .eq(1).click()
    cy.url()
    .should('equal', "http://localhost:3000/favorites")
  });

  it('Should have a title in each tile', () => {
    cy.get('.tile')
    .contains('Gooseberry')

    cy.get('.tile')
    .contains('Pink Daisy')

    cy.get('.tile')
    .contains('Snowflake')
  });

  it('Should have a button to see more in each tile', () => {
    cy.get('.tile')
    cy.get('.see-more')
    .contains('Click here for more options!')
  });

  it('Should be able to click on the button and go to a new view', () => {
    cy.intercept("http://localhost:3001/api/v1/patterns/1", { fixture: "oneFetch.json"})
    cy.get('button')
    .eq(0).click()
    cy.url()
    .should('equal', "http://localhost:3000/patterns/1")
    cy.get('.tile')
    .should('not.exist')
    cy.get('.pattern-detail')
    .should('exist')
    cy.get('.add-to-favorites')
  });

  it('Should be able to click on the button of another tile and display it', () => {

    cy.intercept("http://localhost:3001/api/v1/patterns/1", { fixture: "oneFetch.json"})
    cy.get('button')
    .eq(1).click()
    cy.url()
    .should('equal', "http://localhost:3000/patterns/2")
    cy.get('.tile')
    .should('not.exist')
    cy.get('.pattern-detail')
    .should('exist')
    cy.get('.add-to-favorites')
  });


  it('Should display a 500 message if an invalid URL is entered', () => {
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
