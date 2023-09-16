/// <reference types="cypress" />

import UserLoginApi from '../../api/user-auth/login.api'
import MarkAsCompleted from '../../pages/todo/markAsComplete.page'

import addTodo from '../todo/addTodoCustome.cy'

describe('Mark Todo As Completed', () => {
  beforeEach('Login and Add new Todo', () => {
    UserLoginApi.login()
    cy.addTodo('mark as completed')
  })

  it('TC01: Mark Todo as Completed', () => {
    const complete = new MarkAsCompleted()

    complete.checkAsComplete()
    cy.get('[data-testid="complete-task"]').first().should('be.checked')
  })
})
