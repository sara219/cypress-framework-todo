class TodoPage {
  get welcomeMsg() {
    return cy.get('[data-testid="welcome"]')
  }

  // action
  welcomeMsgShouldBeVisible(){
    this.welcomeMsg.should('be.visible')
  }
}

export default TodoPage
