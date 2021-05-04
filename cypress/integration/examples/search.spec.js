/// <reference types="cypress" />

describe('Filter', () => {
  it('Search restaurant', () => {
    cy.visit('/');
    cy.get(':nth-child(3) > .header__navigation-item-link').click();
    cy.get('input').type('Store 003')
    cy.get('button').click();
    cy.contains('Store 003')
  });
});
