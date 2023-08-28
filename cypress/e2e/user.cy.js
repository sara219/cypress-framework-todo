/// <reference types="cypress" />

import LoginPage from '../pages/login.page'
import TodoPage from '../pages/todo.page'

it('Should be able to login', () => {
  const validEmail = 'honem39976@trazeco.com'
  const validPassword = 'Test123!'

  // obj from class
  const loginPage = new LoginPage()

  // visit
  loginPage
    .load()
    .performLogin(validEmail, validPassword)
    .welcomeMsgShouldBeVisible()
})
