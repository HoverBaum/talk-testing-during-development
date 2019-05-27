/// <reference types="Cypress" />

context('Test site', () => {
  it('should have a headline', () => {
    cy.visit('/')
    cy.get('h1')
  })

  it('should have the right headline', () => {
    cy.visit('/')
    cy.get('h1').contains('Testing page')
  })

  it('should initially have a count of 0 (zero)', () => {
    cy.visit('/')
    cy.get('[data-testid="count-output"]').contains('0')
  })

  it('should increment when clicking increment button', () => {
    cy.visit('/')
    cy.get('[data-testid="button-increment"]').click()
    cy.get('[data-testid="count-output"]').contains('1')
  })

  it('should increment multiple times', () => {
    cy.visit('/')
    cy.get('[data-testid="button-increment"]').click()
    cy.get('[data-testid="button-increment"]').click()
    cy.get('[data-testid="count-output"]').contains('2')
  })

  it('should increment from previous value', () => {
    cy.visit('/')
    cy.get('[data-testid="count-output"]')
      .invoke('text')
      .then(text => {
        cy.get('[data-testid="button-increment"]').click()
        cy.get('[data-testid="count-output"]').contains(parseInt(text) + 1)
      })
  })

  it('should compare to fixture', () => {
    cy.visit('/')
    cy.fixture('data').then(dataFixture => {
      cy.get('[data-testid="count-output"]').contains(dataFixture)
    })
  })

  it('should display message on click', () => {
    cy.visit('/')
    cy.get('[data-testid="button-display"]').click()
    cy.get('[data-testid=display]')
  })

  it('should mock requests', () => {
    cy.server()
    cy.route(/data\/response/, 'fixture:response.json').as('getData')
    cy.visit('/data-loading.html')
    cy.get('[data-testid="data"]')
  })
})
