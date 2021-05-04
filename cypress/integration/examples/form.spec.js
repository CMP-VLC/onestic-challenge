/// <reference types="cypress" />

describe('Form', () => {
    it('Test inputs', () => {
      cy.visit('/');
      cy.get('.header__navigation > :nth-child(2)').click();
      cy.get('#recipe-eggs').clear()
      cy.get('#recipe-eggs').type('2') 
      cy.get('#recipe-pasta').clear()
      cy.get('#recipe-pasta').type('1000') 
      cy.get('#recipe-butter').clear()
      cy.get('#recipe-butter').type('1000') 
      cy.get('#recipe-milk').clear()
      cy.get('#recipe-milk').type('400') 
      cy.get('#recipe-oil').clear()
      cy.get('#recipe-oil').type('200') 
      cy.get('#recipe-bacon').clear()
      cy.get('#recipe-bacon').type('400') 
      cy.get('button').click().end();
    });
  });
  