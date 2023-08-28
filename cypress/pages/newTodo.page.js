import TodoPage from "./todo.page"

class NewTodoPage {
  get newTodoInput() {
    return cy.get('[data-testid="new-todo"]')
  }

  get submitNewTodoBtn() {
    return cy.get('[data-testid="submit-newTask"]')
  }

  addNewTodo(item) {
    this.newTodoInput.type(item)
    this.submitNewTodoBtn.click()
    return new TodoPage()
  }
}

export default NewTodoPage
