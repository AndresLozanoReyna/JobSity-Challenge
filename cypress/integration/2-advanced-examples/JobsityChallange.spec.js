
describe('JobSityChallenge', () => {
    it('Verify Title of the Page!', function() {
     
        cy.visit('http://zero.webappsecurity.com/')
        cy.title().should('eq','Zero - Personal Banking - Loans - Credit Cards')

    })
  })