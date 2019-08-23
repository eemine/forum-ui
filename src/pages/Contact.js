import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4 text-center">Contact</h1>
        <hr className="my-4" />
        <div className="card">
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i className="fa fa-phone" /> +456 789 01 23
              </li>
              <li className="list-group-item">
                <i className="fa fa-skype" /> forum.app
              </li>
              <li className="list-group-item">
                <i className="fa fa-at" /> email@forum.app
              </li>
              <li className="list-group-item">
                <i className="fa fa-map-marker" /> Street Address 34
              </li>
              <li className="list-group-item">
                <i className="fa fa-facebook" /> https://facebook.com/forum.app
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
