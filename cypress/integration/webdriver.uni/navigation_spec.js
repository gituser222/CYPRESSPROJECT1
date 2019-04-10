// / <reference types="Cypress" />

describe('Navigation Test Suite', () => {
  it('open the homepage', () => {
    cy.visit('http://www.webdriveruniversity.com').contains('webdriveruniversity')
  })

  it('verify contact us ', () => {
    cy.get('#contact-us > .thumbnail > .section-title > h1').contains('CONTACT US')
    cy.get('#contact-us > .thumbnail > .caption > h4').contains('Contact Us Form')
    cy.get('#contact-us > .thumbnail > .caption > p').contains('Webdriver Cucumber')
  })

  it('verify login potal tab', () => {
    cy.get('#login-portal > .thumbnail > .section-title > h1').contains('LOGIN PORTAL')
    cy.get('#login-portal > .thumbnail > .caption > h4').contains('Login Portal')
    cy.get('#login-portal > .thumbnail > .caption > p').contains('Give the challenge a try!')
  })
})
