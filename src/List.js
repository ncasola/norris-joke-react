import React from 'react';
import JokesAPI from './services/JokesAPI';
import LocalAPI from './services/LocalAPI';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: []
          };

        this.deleteJoke = this.deleteJoke.bind(this);
    }
    deleteJoke(id) {
        LocalAPI.deleteJoke(id);
        this.setState({jokes: this.state.jokes.filter(joke => joke.id !== id)});
    }

    componentDidMount() {      
        LocalAPI.getLocalJokes().then((data) => {
            this.setState({jokes: data});
        });
    }
    componentDidUpdate(prevProps) {
        if (this.props.category !== prevProps.category) {
            const category = this.props.category;
            JokesAPI.getNewJoke(category).then((data) => {
                this.setState({jokes: [...this.state.jokes, data]});
                LocalAPI.saveNewJoke(data);
            });
        }
    }
    // render method
    render() {
        return (
        <ul className="list-group list-group-numbered list-group-flush">
            {this.state.jokes.map((joke) => (
                <li key={joke.id} className="list-group-item">
                    <span className="badge bg-primary rounded-pill mx-2">{joke.categories}</span>         
                    {joke.value}
                    <span className="badge bg-secondary rounded-pill mx-2">{new Date(joke.created_at).toLocaleDateString()}</span>
                <span className="badge text-bg-danger ms-3" onClick={() => this.deleteJoke(joke.id)}>X</span>
                </li>
            ))}
        </ul>
        );
    }
}

export default List;
