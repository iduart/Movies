This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Running this starter

- Interviewer should have added you as a collaborator in github, or shared this project as a zip file for you.
- Clone from github and/or unzip the project starter, then `cd` into the project root.
- Run `yarn` to install dependencies, then `yarn start` to start dev server on http://localhost:3000



## Requirements: Implement a 5-star rating component for a list of movies and their ratings.


### Part 1: The Movie List
- Using the `movieListState` structure provided, render a list of movie names and their integer ratings.
  - ratings are integers 1 - 5. `null` will be the rating value if the movie has not been rated yet.

### Part 2: 5 Star Rater Component

- Replace the printed-out integer you rendered in the movie list with a "5 Star Rater" component.
- On load/render, the StarRater component should visually show the rating of each movie.
  - Example 1: A movie with a rating of 2 should render only the first 2 stars yellow, depicting a rating of 2 out of 5.
  - Example 2: A movie with a `null` rating should render 5 black stars
- **Click Handler:** When a user clicks on a star, the clicked star should turn yellow along with all of the stars to the left of it to indicate the rating was chosen. The new rating value should be set and stored by updating the data array using the reducer provided.
- **Hover Event:** When a user hovers over a star, that star and all stars to the left of it should turn grey, providing a preview of the rating that you are wishing to give.
- Bonus: using `yarn test`, run the units tests found in `App.test.js`, make sure they pass, and add your own test to assert that the correct number of yellow stars appear for each movie

## Further Discussion Topics
  - How would this component interact with an API designed to store the rating?
    - What would the API endpoint look like as far as URL, request body, params, and method?
    - What sorts of UI files/folders/tooling would you add to this project to support AJAX requests?
  - How would we handle unexpected server errors?
  - Our DB and/or API is very slow! How can we optimize this experience for the user?