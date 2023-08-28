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
  }

  performLogin(email, password) {
    this.emailInput.type(email)
    this.passInput.type(password)
    this.submit.click()
  }
}

export default LoginPage
