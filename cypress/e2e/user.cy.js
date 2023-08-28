/// <reference types="cypress" />

import LoginPage from '../pages/login.page'

it('Should be able to login', () => {
  const validEmail = 'honem39976@trazeco.com'
  const validPassword = 'Test123!'

  // obj from login class
  const loginPage = new LoginPage()

  // visit
  loginPage.load()
  // run login
  loginPage.performLogin(validEmail, validPassword)

  cy.get('[data-testid="welcome"]').should('be.visible')
})
