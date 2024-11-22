describe('Percy Visual Test for App Component', () => {
  it('should capture a snapshot of the App component', () => {
    // Visit the page where the App component is rendered
    cy.visit('http://localhost:3000'); // Ensure your dev server runs on this URL

    // Take a Percy snapshot
    cy.percySnapshot('App Component Snapshot');
  });
});