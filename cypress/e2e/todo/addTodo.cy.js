/// <reference types="cypress" />

import UserLoginApi from '../../api/user-auth/login.api'
import addTodo from './addTodoCustome.cy'

describe('Add Todo Test Cases', () => {
  beforeEach('Login Before Each Test Cases', () => {
    UserLoginApi.login()
  })
  it('TC01: Add valid Todo Text', () => {
    cy.addTodo('Buy groceries')
    cy.get('[data-testid="todo-text"]').first().should('contain.text', 'Buy')
  })
  // * Output => Pass

  // !=====================================================

  it('TC02: Add empty Todo Text', () => {
    cy.addTodo(' ')
    cy.get('.MuiFormHelperText-root')
      .should('be.visible')
      .and('contain.text', 'should be more than 3 characters')
  })
  // * Output => Pass

  // !=====================================================

  it('TC03: Add todo with 3 characters', () => {
    cy.addTodo('Hii')
    cy.get('.MuiFormHelperText-root')
      .should('be.visible')
      .and('contain.text', 'should be more than 3 characters')
  })
  // ! Output => Fail => actual result: add todo with 3 char

  // !=====================================================

  it.only('TC04: Add todo with more than 3 characters', () => {
    cy.addTodo('Hiii')
    cy.get('[data-testid="todo-text"]')
      .first()
      .should('be.visible')
      .and('contain.text', 'i')
  })
})
