import App, { data } from './App';
import { render, screen } from '@testing-library/react';

import React from 'react';

describe('star rater app', () => {
  let container;
  beforeEach(() => {
    container = render(<App />).container;
  });

  it('should render a page title h1', () => {
    expect(container.querySelector('h1').innerHTML).toEqual('Movie Ratings!');
  });

  it('should render a list of each movie name', () => {
    data.forEach((movie) => {
      expect(container.innerHTML).toContain(movie.name);  
    });
  });

  it('should render a star rater element for each movie', () => {
    expect(container.querySelectorAll('[data-testid="star-rater"]').length).toEqual(data.length);
  });

  // TODO: Make this test pass!
  // it('should render correct no. of yellow stars according to each movies rating', () => {
  //   expect(false).toEqual(true);
  // });
});



