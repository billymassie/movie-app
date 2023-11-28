import React from 'react';
import './card.css';

function Card({ movie }) {
  return (
    <div className='col-lg-2 col-md-4 col-sm-6'>
      <div className='movie-card'>
        <img src={movie.previewImg} alt='Preview Image' className='img-fluid' />
        <p>
          {movie.length} | {movie.category}
        </p>
      </div>
    </div>
  );
}

export default Card;
