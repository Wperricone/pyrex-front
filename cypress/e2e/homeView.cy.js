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

  it('Should not have a see all patterns button', () => {
    cy.get('.active')
    .contains('See All Patterns')
  })

  it('Should have a favorites button', () => {
    cy.get('.fav-button')
    .contains('Favorites')
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
    .first().click()
    cy.url()
    .should('equal', "http://localhost:3001/api/v1/patterns/1")

  });

  // it('Should be able to click on the button and go to a new view', () => {
  //
  //   cy.get('.see-more', {timeout: 5000})
  //   .eq(0).click()
  //   // .click()
  //   // cy.url()
  //   // .should('equal', "http://localhost:3001/api/v1/patterns/1")
  //   // cy.get('.tile')
  //   // .should('not.exist')
  //   // cy.get('.pattern-detail')
  //   // .should('exist')
  //   // .contains('.add-to-favorites')
  // });

  // it('Should be able to click on the button of another tile and display it', () => {
  //   cy.contains('Pink Daisy')
  //   cy.get('.see-more').click()
  //   cy.get('.tile')
  //   .should('not.exist')
  //   cy.get('.pattern-detail')
  //   .should('exist')
  //   .contains('.add-to-favorites')
  //
  // })

  // it('Should display an error message if fetch fails', () => {
  //   cy.intercept("GET", 'http://localhost:3001/api/v1/patterns', {
  //     statusCode: 500,
  //     body: {
  //     message: 'Server error, please try again'
  //     }
  //   })
  //   cy.visit('http://localhost:3000')
  //   //cy.get('h3').contains("Something went wrong, please try again!")
  // });

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
