import React from 'react';
import App from '../../src/App'; // Adjust the path as necessary

describe('App Component', () => {
  it('renders the App and takes a Percy snapshot', () => {
    cy.mount(<App />);
    cy.percySnapshot('App Component');
  });
});