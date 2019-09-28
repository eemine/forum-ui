import React, { Component } from "react";
import Card from "../../components/Card";

class Home extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <div className="container">
        <br />
        <h3>Categories</h3>
        <div className="card-columns">
          {this.props.categories.map(
            ({ imagePath, name, description, urlId }) => (
              <Card
                imagePath={imagePath}
                title={name}
                description={description}
                link={`categories/${urlId}`}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

export default Home;
