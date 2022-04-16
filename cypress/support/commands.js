Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Ian')
    cy.get('#lastName').type('Vidal')
    cy.get('#email').type('ianvidal@live.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})