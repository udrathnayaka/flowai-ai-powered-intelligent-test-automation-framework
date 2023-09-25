
// This Cypress script will convert 1000 LKR to AUD

describe('Currency Conversion', () => {
  it('converts 1000 LKR to AUD', () => {
    cy.visit('https://www.xe.com/currencyconverter/convert/?Amount=1000&From=LKR&To=AUD');
    cy.get('#converterResult > div.converterresult-toAmount').should('contain', '7.00 AUD');
  });
});