/// <reference types="Cypress" />

context('Test site', () => {

  it('should have a headline', () => {
    cy.visit('/')
    cy.get('h1')
  })

  it('should have the right headline', () => {
    cy.visit('/')
    cy.get('h1')
      .contains('Testing page')
  })

  it('should initially have a count of 0 (zero)', () => {
    cy.visit('/')
    cy.get('[data-test="count-output"]').contains('0')
  })

  it('should increment when clicking increment button', () => {
    cy.visit('/')
    cy.get('[data-test="button-increment"]').click()
    cy.get('[data-test="count-output"]').contains('1')
  })

  it('should increment multiple times', () => {
    cy.visit('/')
    cy.get('[data-test="button-increment"]').click()
    cy.get('[data-test="button-increment"]').click()
    cy.get('[data-test="count-output"]').contains('2')
  })

  it('should display message on click', () => {
    cy.visit('/')
    cy.get('[data-test="button-display"]').click()
    cy.get('[data-test=display]')
  })

})