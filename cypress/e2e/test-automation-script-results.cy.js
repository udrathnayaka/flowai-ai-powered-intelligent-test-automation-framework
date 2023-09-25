
describe('Navigate to ebay and search for macbook air', () => {
    it('Navigate to ebay and search for macbook air', () => {
        cy.visit('https://www.ebay.com/')
        cy.get('#gh-ac').type('macbook air')
        cy.get('#gh-btn').click()
        cy.url().should('include', 'macbook+air')
    })
})