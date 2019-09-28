import React from "react";

const NotFound = () => {
  return (
    <div className="container text-center">
      <img
        src="https://thingiverse-production-new.s3.amazonaws.com/assets/26/26/b7/e8/99/Mike-Wazowski2.jpg"
        alt="not found"
        className="mt-5 mb-5"
        style={{ width: "300px" }}
      />
      <h1 className="display-4">Oops! Page Not Found.</h1>
      <blockquote className="blockquote text-muted mt-1">
        You must have picked the wrong door beacuse I<br />
        haven't been able to pay my eye on the page
        <br />
        you're searching for
      </blockquote>
    </div>
  );
};

export default NotFound;
