/// <reference types="cypress" />

describe('login', function(){
    it('Sing in', function(){
        cy.visit('https://yellowvdo.com/duty_free/admin')
        cy.get('input[type="email"]').type('admin@admin.com')
        cy.get('input[type="password"]').type('admin@123')
        cy.get('input[type="submit"]').contains('Lets Go').should('be.visible').click()
    })
})