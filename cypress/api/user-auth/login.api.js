class UserLoginApi {
  static login() {
    return cy.fixture('validUser').then((data) => {
      return cy.request({
        url: 'http://qacart-todo.herokuapp.com/api/v1/users/login',
        method: 'POST',
        body: {
          email: data.email,
          password: data.password,
        },
      })
    })
  }
}

export default UserLoginApi
