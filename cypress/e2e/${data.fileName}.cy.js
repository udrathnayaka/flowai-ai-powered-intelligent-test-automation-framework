
// cypress script

describe('Currency Conversion', () => {
  it('converts 100 LKR to AUD', () => {
    cy.visit('https://www.xe.com/currencyconverter/convert/?Amount=100&From=LKR&To=AUD');
    cy.get('#converterResult > div.converterresult-toAmount').contains('0.00 AUD');
  });
});