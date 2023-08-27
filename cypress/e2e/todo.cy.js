/// <reference types="cypress" />

describe('Todo Test Cases', () => {
  let accessToken = ''

  beforeEach(() => {
    cy.request({
      url: '/api/v1/users/login',
      method: 'POST',
      body: {
        email: 'honem39976@trazeco.com',
        password: 'Test123!',
      },
    }).then((res) => {
      expect(res.status).equal(200)
      accessToken = res.body.access_token
      //   cy.log(accessToken)
    })
    cy.visit('/')
  })

  // ==========

  it('Should be able to add a todo', () => {
    cy.get('[data-testid="add"]').click()
    cy.get('[data-testid="new-todo"]').type('Test')
    cy.get('[data-testid="submit-newTask"]').click()
  })

  // ==========
  it.only('Should be able to mark as completed', () => {
    const newTodo = {
      item: 'new test for add todo',
      isCompleted: false,
    }

    cy.request({
      url: '/api/v1/tasks',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: newTodo,
    }).then((res) => {
      expect(res.status).equal(201)
    })

    cy.get('[data-testid="complete-task"]').eq(0).check()
    cy.get('[data-testid="complete-task"]').should('be.checked')
  })
})
