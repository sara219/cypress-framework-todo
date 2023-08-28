/// <reference types="cypress" />

import TodoApi from '../api/todo.api'
import UserApi from '../api/user.api'
import NewTodoPage from '../pages/newTodo.page'
import TodoPage from '../pages/todo.page'

describe('Todo Test Cases', () => {
  const todoPage = new TodoPage()

  let accessToken
  beforeEach(() => {
    UserApi.register().then((res) => {
      accessToken = res.body.access_token
    })
  })

  // ==========

  it('Should be able to add a todo', () => {
    todoPage
      .load()
      .clickOnAddBtn()
      .addNewTodo('Test')
      .firstItemShouldHaveText('Test')
  })

  // ==========
  it.only('Should be able to mark as completed', () => {
    TodoApi.addTodo(accessToken).then((res) => {
      expect(res.status).equal(201)
    })
    todoPage.load().markTodoAsComplete().checkIfCompleted()
  })
})
