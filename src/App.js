import './App.css';

import React, { useReducer } from 'react';

export const data = {
  1: {"name":"The Last Samurai","rating":null, id: 1},
  2: {"name":"Harold and Kumar Go To White Castle","rating":2, id: 2},
  3: {"name":"Nick Danger, Third Eye","rating":null, id: 3},
  4: {"name":"The Beast of Yucca Flats","rating":null, id: 4},
  5: {"name":"Manos: Hands of Fate","rating":null, id: 5},
  6: {"name":"El Topo","rating":null, id: 6},
  7: {"name":"Garfield: The Movie","rating":null, id: 7},
  8: {"name":"Kangaroo Jack","rating":null, id: 8},
  9: {"name":"Akira","rating":null, id: 9},
  10: {"name":"Ghost in the Shell","rating":null, id: 10},
  11: {"name":"Chicken Run","rating":5, id: 11}
};

function movieListReducer(state, action) {
  switch (action.type) {
    case 'updateMovieRating':
      return state;
    default:
      throw new Error();
  }
}

const StarRater = () => {
  return <div data-testid="star-rater">★★★★★</div>;
};

const MovieList = () => {
  const [movieListState, dispatch] = useReducer(movieListReducer, data);
  return (
    <div>
      <h1>Movie Ratings!</h1>
      <StarRater />
    </div>
  )
};

export default () => <MovieList />;