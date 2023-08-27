/// <reference types="cypress" />

it('Should be able to add a todo', () => {
  cy.visit('/')
  cy.get('[data-testid="email"]').type('honem39976@trazeco.com')
  cy.get('[data-testid="password"]').type('Test123!')
  cy.get('[data-testid="submit"]').click()

  cy.get('[data-testid="add"]').click()
  cy.get('[data-testid="new-todo"]').type('Test')
  cy.get('[data-testid="submit-newTask"]').click()

  cy.get('[data-testid="todo-item"]').eq(0).should('have.text', 'cypress')
})

it.only('Should be able to mark as completed', () => {
  cy.visit('/')

  cy.get('[data-testid="email"]').type('honem39976@trazeco.com')
  cy.get('[data-testid="password"]').type('Test123!')
  cy.get('[data-testid="submit"]').click()

  cy.get('[data-testid="add"]').click()
  cy.get('[data-testid="new-todo"]').type('Test')
  cy.get('[data-testid="submit-newTask"]').click()

  cy.get('[data-testid="complete-task"]').eq(0).check()
  cy.get('[data-testid="complete-task"]').should('be.checked')

  // ==========
})
