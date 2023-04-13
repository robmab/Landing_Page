import React from "react";
import propTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="col-card col-12 col-lg-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="http://placehold.it/500x325.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">{props.cardText}</p>
        </div>
        <div className="card-body-button">
          <a href="#" className="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>
    </div>
  );
};

Card.PropTypes = {
  cardText: propTypes.string,
};

export default Card;
