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
    .contains('Click here for more options!').click()
  });

  it('Should be able to click on the button and go to a new view', () => {
    cy.intercept("http://localhost:3001/api/v1/patterns/1", { fixture: "patterns.json"})
    cy.visit('http://localhost:3000', {timeout: 2000})
    cy.get('.see-more')
    .eq(0)
    // .click()
    // cy.url()
    // .should('equal', "http://localhost:3001/api/v1/patterns/1")
    // cy.get('.tile')
    // .should('not.exist')
    // cy.get('.pattern-detail')
    // .should('exist')
    // .contains('.add-to-favorites')
  });

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
});
