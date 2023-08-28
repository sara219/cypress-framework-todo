import TodoPage from "./todo.page"

class LoginPage {
  // locators = elements
  get emailInput() {
    return cy.get('[data-testid="email"]')
  }

  get passInput() {
    return cy.get('[data-testid="password"]')
  }

  get submit() {
    return cy.get('[data-testid="submit"]')
  }

  // methods
  load() {
    cy.visit('/')
    return this
  }

  performLogin(email, password) {
    this.emailInput.type(email)
    this.passInput.type(password)
    this.submit.click()
    return new TodoPage()
  }
}

export default LoginPage
