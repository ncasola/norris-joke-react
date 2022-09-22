import React from "react";
import List from "./List";
import Selector from "./Selector";

class Jokes extends React.Component {
    constructor(props) {
      super(props);
      this.handleCategoryChange = this.handleCategoryChange.bind(this);
      this.state = {category: ''};
    }
  
    handleCategoryChange(newCategory) {
      console.log(newCategory);
      this.setState({category: newCategory});
    }

    render() {
    const category = this.state.category;
      return (
        <div className="container">
          <Selector category={category} onCategoryChange={this.handleCategoryChange} />
          <List category={category} />
        </div>
      );
    }
  }

export default Jokes;