import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toyName: '',
        };
    }

    handleToyNameChange = (event) => this.setState({ toyName: event.currentTarget.value });

    render() {
        return (
            <div className="App">
                Toys:
                <ul>
                    <li>No toys :/</li>
                </ul>
                <div>
                    <input
                        type="text"
                        value={this.state.toyName}
                        onChange={this.handleToyNameChange}
                    />
                    <button>Add toy</button>
                </div>
            </div>
        );
    }
}

export default App;
