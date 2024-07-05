describe('template spec', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('baseUrl'));
      cy.get('[data-qa="accept-cta"]').click();
    });
    it("test d'inscription réussie", () => {

      cy.get('#firstName').type('toto');
      cy.get('#lastName').type('titi'); 
      cy.get('#signup-email').type('toto1234@gmail.com'); 
      cy.get('#signup-password').type('Toto123456789'); 
      cy.get('[data-qa="signup-submit-button"]').click();
      });
   
      it("test d'inscription échouée", () => {

        cy.get('#firstName').type('tata');
        cy.get('#lastName').type('titi'); 
        cy.get('#signup-email').type('toto1234@gmail.com'); 
        cy.get('#signup-password').type('123456789'); 
        cy.get('[data-qa="signup-submit-button"]').click();
        cy.get('p.flex.items-baseline.mt-2.text-primary-light.peer-disabled\\:text-primary-disabled.body-2-light.\\!text-danger').should('be.visible').and('contain', "Au moins 8 caractères, dont 1 majuscule, 1 minuscule et 1 chiffre. Parce qu'on sait jamais.");
        });

        it("test d'authentification", () => {

      
          cy.get('#signin-email').type('toto1234@gmail.com'); 
          cy.get('#signin-password').type('Toto123456789'); 
          cy.get('[data-qa="signin-submit-button"]').click();
          
          });
  

  
  });