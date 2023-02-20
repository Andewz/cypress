describe('Test Autologin', () => {
    it('Login', () => {
        cy.visit('https://stg-cupe.xpertphone.com')
        cy.wait(1000);
        cy.contains('LOGIN').click();
        cy.get('.select2-selection__arrow').click();
        cy.get('.select2-search__field').type('Thailand').type('{enter}');
        cy.wait(1000);
        cy.get('#username').type('0909526408')
        cy.wait(1000);
        cy.get('#password').type('123456789');
        cy.get('#btnLogin').click();
    })
})