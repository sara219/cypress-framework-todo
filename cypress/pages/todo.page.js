import { th } from '@faker-js/faker'
import NewTodoPage from './newTodo.page'

class TodoPage {
  get welcomeMsg() {
    return cy.get('[data-testid="welcome"]')
  }

  get plusBtn() {
    return cy.get('[data-testid="add"]')
  }

  // get the first todo to make assertion
  get firstTodo() {
    return cy.get('[data-testid="todo-item"]').eq(0)
  }

  // get the first todo to mark it as complete
  get firstTodoToMark() {
    return cy.get('[data-testid="complete-task"]').eq(0)
  }

  // action
  // visit the page
  load() {
    cy.visit('/')
    return this
  }
  // click on + button and move to add new todo page
  clickOnAddBtn() {
    this.plusBtn.click()
    return new NewTodoPage()
  }

  // method => assertion for getting the first todo
  firstItemShouldHaveText(text) {
    this.firstTodo.should('have.text', text)
  }

  // method => assertion for after login
  welcomeMsgShouldBeVisible() {
    this.welcomeMsg.should('be.visible')
  }

  // method => mark as completed
  markTodoAsComplete() {
    this.firstTodoToMark.check()
    return this
  }

  // method => assertion for checking if its completed
  checkIfCompleted() {
    this.firstTodoToMark.should('be.checked')
  }
}

export default TodoPage
