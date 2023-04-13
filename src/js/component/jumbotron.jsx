import React from "react";

const Jumbotron = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="jumbotron">
          <h1 className="display-4">A Warm Welcome!</h1>
          <p className="lead">
            Nunc rhoncus nulla id odio gravida vestibulum. In malesuada
            scelerisque ipsum, sed porttitor risus. Aenean luctus ipsum at nunc
            mattis, vel pharetra urna hendrerit.
          </p>

          <a className="btn btn-primary btn-lg" href="#" role="button">
            Call to action!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
