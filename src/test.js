/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    it("Checking the order of keys", ()=>{
      cy.get('.color-pad').first().should
      ('have.text', '1')
      cy.get('.color-pad').eq(2).should
      ('have.text', '3')
      cy.get('.color-pad').eq(3).should
      ('have.text', '4')
      cy.get('.color-pad').eq(4).should
      ('have.text', '5')
      cy.get('.color-pad').eq(6).should
      ('have.text', '7')
      cy.get('.color-pad').eq(8).should
      ('have.text', '9')
     })
  
    it('testing functionaliy', () => {
        cy.get('#color-machine').should('exist')
        cy.get('#control-screen').should('exist')
        cy.get("[data-id='input-color']").should('exist')
        cy.get('.color-pad').should('exist')
        cy.get('#div-pads').should('exist')
  
        
        
        cy.get("[data-id='input-color']").type('#FF0000')
        cy.get('#submit').click()
        cy.get('#1').click()
        cy.get('#1')
        .should('have.css', 'background-color')
        .and('eq', 'rgb(255, 0, 0)')
  
        cy.get("[data-id='input-color']").clear()
        cy.get("[data-id='input-color']").type('#000000')
        cy.get('#submit').click()
        cy.get('.color-pad').eq(2).click()
        cy.get('.color-pad').eq(2)
        .should('have.css', 'background-color')
        .and('eq', 'rgb(0, 0, 0)')
    })
  })
  