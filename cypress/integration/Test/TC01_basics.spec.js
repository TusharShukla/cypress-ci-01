/// <reference types="cypress" />

describe('contact_us', function(){
    it('Contact', function(){
        cy.visit('https://bombinate.com/login?ow=/')
        cy.get('#cy-login-email').type('tushar.shukla@fusionfrst.co.in')
        cy.get('#cy-login-password').type('12345678')
        cy.get('#cy-login-button').click()
    })
})
