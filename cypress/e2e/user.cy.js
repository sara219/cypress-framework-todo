/// <reference types="cypress" />

import LoginPage from '../pages/login.page'
import TodoPage from '../pages/todo.page'

it('Should be able to login', () => {
  const validEmail = Cypress.env('email')
  const validPassword = Cypress.env('password')

  // obj from class
  const loginPage = new LoginPage()

  // visit
  loginPage
    .load()
    .performLogin(validEmail, validPassword)
    .welcomeMsgShouldBeVisible()
})