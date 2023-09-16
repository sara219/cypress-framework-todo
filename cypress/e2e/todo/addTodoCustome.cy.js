/// <reference types="cypress" />

import NewTodoPage from '../../pages/todo/newTodo.page'


// Custom command to add a todo
Cypress.Commands.add('addTodo', (todoText) => {
  const addNew = new NewTodoPage()
  addNew.load().addNewTodo(todoText)
})
