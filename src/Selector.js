import React from 'react';
import JokesAPI from './services/JokesAPI';

class Selector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
          };

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.props.onCategoryChange(e.target.value);
    }   

    componentDidMount() {      
        JokesAPI.getCategories().then((data) => {
            this.setState({categories: data});
        });
    }
    // render method
    render() {
        const category = this.props.category;
        return (
        <form>
            <label className="form-label">
            Choose a category:
            </label>
            <select className="form-control" value={category} onChange={this.handleChange}>
                {this.state.categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <hr />
        </form>
        );
    }
    }

export default Selector;
