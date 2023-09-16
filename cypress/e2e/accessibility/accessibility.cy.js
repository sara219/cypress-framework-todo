/// <reference types="cypress" />

describe('Test The Accessibility', () => {
  it('Accessibility', () => {
    cy.visit('/')
    cy.injectAxe()
    cy.checkA11y()
  })
})