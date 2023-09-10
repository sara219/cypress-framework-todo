/// <reference types="cypress" />

import { faker } from '@faker-js/faker'
import LoginPage from '../../pages/user-auth-page/login.page'

describe('Login Test Cases', () => {
  it('TC01: Login With Valid Email and Valid Password ', () => {
    const login = new LoginPage()

    cy.fixture('validUser').then((validData) => {
      login
        .load()
        .performLogin(validData.email, validData.password)
        .welcomeMsgShouldBeVisible()
    })
  })

  // !=====================================================
  it('TC02: Login With Valid Email and Invalid Password ', () => {
    const login = new LoginPage()

    cy.fixture('validUser').then((validData) => {
      login.load().performLogin(validData.email, faker.internet.password())

      // assertions
      cy.get('[data-testid="error-alert"]')
        .should('be.visible')
        .and(
          'contain.text',
          'The email and password combination is not correct'
        )
    })
  })

  // !=====================================================

  it('TC03: Login With invalid Email and valid Password ', () => {
    const login = new LoginPage()

    cy.fixture('validUser').then((validData) => {
      login.load().performLogin(faker.internet.email(), validData.password)

      // assertions
      cy.get('[data-testid="error-alert"]')
        .should('be.visible')
        .and('contain.text', 'We could not find the email in the database')
    })
  })

  // !=====================================================

  it('TC04: Login With invalid Email and invalid Password ', () => {
    const login = new LoginPage()

    cy.fixture('validUser').then((validData) => {
      login
        .load()
        .performLogin(faker.internet.email(), faker.internet.password())

      // assertions
      cy.get('[data-testid="error-alert"]')
        .should('be.visible')
        .and('contain.text', 'We could not find the email in the database')
    })
  })
})
