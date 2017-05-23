import React from 'react';

function MovieReviews(props) {
  //props.reviews == array of objects (from the api)
  const reviewList = props.reviews.map( movie => (
    <div className="review">
      <h2>{movie.display_title}</h2>
      <p>{movie.headline}</p>
      <p>{movie.summary_short}</p>
    </div>
  )
  )

  return (
    <div className="review-list">
      {reviewList}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
