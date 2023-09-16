class NewTodoPage {
  get addBtn() {
    return cy.get('[data-testid="add"]')
  }

  get newTodo() {
    return cy.get('[data-testid="new-todo"]')
  }

  get addNewTodoBtn() {
    return cy.get('[data-testid="submit-newTask"]')
  }

  //   actions
  load() {
    cy.visit('/')
    return this
  }
  addNewTodo(newItem) {
    this.addBtn.click()
    this.newTodo.type(newItem)
    this.addNewTodoBtn.click()
  }
}

export default NewTodoPage
