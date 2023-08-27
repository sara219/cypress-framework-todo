class TodoApi {
  static addTodo(accessToken) {
    const newTodo = {
      item: 'new test for add todo',
      isCompleted: false,
    }

    return cy.request({
      url: '/api/v1/tasks',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: newTodo,
    })
  }
}

export default TodoApi
