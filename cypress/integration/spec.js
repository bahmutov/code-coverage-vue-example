/// <reference types="cypress" />
describe('Todo Vue', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('shows header', () => {
    cy.contains('h1', 'My Todo App!').should('be.visible')
  })
})
