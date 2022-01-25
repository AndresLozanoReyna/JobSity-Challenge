/// <reference types="cypress" /> 

describe('Feedbackpage', () => {

    it('Verify Title of the Page!', function() {
     cy.visit('http://zero.webappsecurity.com/feedback.html')
    cy.title().should('eq','Zero - Contact Us')


    })

    it('Gets, types and asserts', function() {
        cy.visit('http://zero.webappsecurity.com/feedback.html')
        cy.contains('Feedback').should('be.visible')
          .should('have.css','font-size','24.5px')

        cy.get('#name').type('Test')
        cy.get('#email').type('Test@test.com')
        cy.get('#subject').type('Test')
        cy.get('#comment').type('Test Jobsity challenge')
        cy.get('[name="submit"]').click()
        cy.contains('Thank you for your comments, Test. They will be reviewed by our Customer Service staff and given the full attention that they deserve.').should('be.visible')
        .should('have.css','font-size','14px')

        

     



     
   
   
       })
   


  })