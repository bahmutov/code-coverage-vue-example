/// <reference types="cypress" />
describe('Todo Vue', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('shows header', () => {
    cy.contains('h1', 'My Todo App!').should('be.visible')
  })

  it('adds and removes todos', () => {
    cy.get('[data-cy=input]')
      .type('write code{enter}')
      .type('add tests{enter}')
    cy.get('[data-cy=todo]')
      .should('have.length', 2)
      .first()
      .find('[data-cy=remove]')
      .click()
    cy.get('[data-cy=todo]').should('have.length', 1)
  })
})
