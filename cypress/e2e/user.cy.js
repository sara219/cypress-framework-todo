/// <reference types="cypress" />

import LoginPage from '../pages/login.page'

it('Should be able to login', () => {
  // obj from login class
  const loginPage = new LoginPage()

  // visit
  loginPage.load()
  // run login
  loginPage.performLogin('honem39976@trazeco.com', 'Test123!')

  cy.get('[data-testid="welcome"]').should('be.visible')
})
