import React from 'react';
import MovieReviews from './MovieReviews'
import { fetch } from 'whatwg-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
//this URL will give latest movie reviews
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends React.Component{
  constructor() {
    super()

    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }));
  }  //response == api object, response.result == array of object (look at api)

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
