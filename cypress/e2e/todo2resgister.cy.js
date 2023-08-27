/// <reference types="cypress" />

import TodoApi from '../api/todo.api'
import UserApi from '../api/user.api'

describe('Todo Test Cases', () => {
  let accessToken
  beforeEach(() => {
    UserApi.register().then((res) => {
      accessToken = res.body.access_token
    })
  })

  // ==========

  it('Should be able to add a todo', () => {
    cy.visit('/')
    cy.get('[data-testid="add"]').click()
    cy.get('[data-testid="new-todo"]').type('Test')
    cy.get('[data-testid="submit-newTask"]').click()
  })

  // ==========
  it.only('Should be able to mark as completed', () => {
    TodoApi.addTodo(accessToken).then((res) => {
      expect(res.status).equal(201)
    })

    cy.visit('/')
    cy.get('[data-testid="complete-task"]').eq(0).check()
    cy.get('[data-testid="complete-task"]').should('be.checked')
  })
})
