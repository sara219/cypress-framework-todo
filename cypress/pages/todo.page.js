import NewTodoPage from "./newTodo.page"

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
}

export default TodoPage
