/// <reference types="cypress" />

it('Should be able to login', () => {
  cy.visit('/')
  cy.get('[data-testid="email"]').type('honem39976@trazeco.com')
  cy.get('[data-testid="password"]').type('Test123!')

  cy.get('[data-testid="submit"]').click()

  cy.get('[data-testid="welcome"]').should('be.visible')
})
