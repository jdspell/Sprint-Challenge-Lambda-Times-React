import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{/* headline goes here */props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={`${props.img}` /* image source goes here */} alt={`${props.headline}`} />
        </div>
        <span>By {/* author goes here */props.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
