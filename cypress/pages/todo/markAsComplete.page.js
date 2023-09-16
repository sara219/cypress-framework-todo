class MarkAsCompleted {
  get checkBox() {
    return cy.get('[data-testid="complete-task"]').first()
  }

  checkAsComplete(){
    this.checkBox.check()
  }
}

export default MarkAsCompleted