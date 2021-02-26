/// <reference types="cypress" />

context('Monitor App Tests', () => {
  
    it('The monitor renders three nodes one showing green, one showing amber and one showing red', () => {
        cy.intercept('/monitor').as('networkCall')
        cy.visit('/');
        cy.wait('@networkCall');

        cy.get('div.node').eq(0).contains('Node 1: ok')
        cy.get('div.node').eq(0).should('have.class', 'bg-success')
        
        cy.get('div.node').eq(1).contains('Node 2: warning')
        cy.get('div.node').eq(1).should('have.class', 'bg-warning')
        
        cy.get('div.node').eq(2).contains('Node 3: error')
        cy.get('div.node').eq(2).should('have.class', 'bg-danger')
    })

    it('The monitor renders three nodes all appearing green', () => {
        cy.intercept('/monitor', { fixture: 'threeGreenNodesData.json' }).as('networkCall')
        cy.visit('/');
        cy.wait('@networkCall');

        cy.get('div.node').eq(0).contains('Node 1: ok')
        cy.get('div.node').eq(0).should('have.class', 'bg-success')
        
        cy.get('div.node').eq(1).contains('Node 2: ok')
        cy.get('div.node').eq(1).should('have.class', 'bg-success')
        
        cy.get('div.node').eq(2).contains('Node 3: ok')
        cy.get('div.node').eq(2).should('have.class', 'bg-success')
    })

    it('The monitor renders six nodes with at least one node in green state, one amber state and one red state', () => {
        cy.intercept('/monitor', { fixture: 'sixNodesData.json' }).as('networkCall')
        cy.visit('/');
        cy.wait('@networkCall');

        cy.get('div.node').eq(0).contains('Node 1: ok')
        cy.get('div.node').eq(0).should('have.class', 'bg-success')
        
        cy.get('div.node').eq(1).contains('Node 2: warning')
        cy.get('div.node').eq(1).should('have.class', 'bg-warning')
        
        cy.get('div.node').eq(2).contains('Node 3: error')
        cy.get('div.node').eq(2).should('have.class', 'bg-danger')

        cy.get('div.node').eq(3).contains('Node 4: ok')
        cy.get('div.node').eq(3).should('have.class', 'bg-success')
        
        cy.get('div.node').eq(4).contains('Node 5: warning')
        cy.get('div.node').eq(4).should('have.class', 'bg-warning')
        
        cy.get('div.node').eq(5).contains('Node 6: error')
        cy.get('div.node').eq(5).should('have.class', 'bg-danger')
    })

    afterEach(() => {
        cy.screenshot();
    })
  })
  