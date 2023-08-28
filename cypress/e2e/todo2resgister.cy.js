/// <reference types="cypress" />

import TodoApi from '../api/todo.api'
import UserApi from '../api/user.api'
import NewTodoPage from '../pages/newTodo.page'
import TodoPage from '../pages/todo.page'

describe('Todo Test Cases', () => {
  let accessToken
  beforeEach(() => {
    UserApi.register().then((res) => {
      accessToken = res.body.access_token
    })
  })

  // ==========

  it.only('Should be able to add a todo', () => {
    const todoPage = new TodoPage()

    todoPage
      .load()
      .clickOnAddBtn()
      .addNewTodo('Test')
      .firstItemShouldHaveText('Test')
  })

  // ==========
  it('Should be able to mark as completed', () => {
    TodoApi.addTodo(accessToken).then((res) => {
      expect(res.status).equal(201)
    })

    cy.visit('/')
    cy.get('[data-testid="complete-task"]').eq(0).check()
    cy.get('[data-testid="complete-task"]').should('be.checked')
  })
})
