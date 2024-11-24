import React from 'react';
import Article from '../../src/Article';

describe('Article Component', () => {
  it('renders the Article and takes a Percy snapshot', () => {
    cy.mount(<Article />);
    cy.percySnapshot('App Component');
  });
});