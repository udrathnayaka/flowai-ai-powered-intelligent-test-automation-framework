
describe('Lighthouse Accessibility Performance and SEO Audits', () => {
  it('Runs Lighthouse Accessibility Performance and SEO Audits on Ebay', () => {
    cy.visit('https://www.ebay.com/');
    cy.lighthouse({
      accessibility: {
        score: 0.9,
        thresholds: {
          'color-contrast': 7.0,
          'link-name': 0.9,
          'aria-allowed-attr': 0.9,
        },
      },
      performance: {
        score: 0.9,
        thresholds: {
          'first-contentful-paint': 0.9,
          'speed-index': 0.9,
          'interactive': 0.9,
        },
      },
      seo: {
        score: 0.9,
        thresholds: {
          'viewport': 0.9,
          'document-title': 0.9,
          'meta-description': 0.9,
        },
      },
    });
  });
});