import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const client = new ApolloClient({
    uri: '/graphql',
});

const GET_TOYS = gql`
    {
        toys {
            id
            name
        }
    }
`;

const ADD_TOY = gql`
    mutation($toyData: ToyInput!) {
        createToy(toyData: $toyData) {
            name
        }
    }
`;

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
            <ApolloProvider client={client}>
                <div className="App">
                    Toys:
                    <ul>
                        <Query query={GET_TOYS}>
                            {({ data }) => {
                                const toys = data.toys;
                                if (toys) {
                                    return toys.map((toy) => <li key={toy.id}>{toy.name}</li>);
                                }

                                return <li>No toys :/</li>;
                            }}
                        </Query>
                    </ul>
                    <div>
                        <input
                            type="text"
                            value={this.state.toyName}
                            onChange={this.handleToyNameChange}
                        />
                        <Mutation mutation={ADD_TOY} refetchQueries={[{ query: GET_TOYS }]}>
                            {(createToy) => (
                                <button
                                    onClick={() =>
                                        createToy({
                                            variables: {
                                                toyData: {
                                                    name: this.state.toyName,
                                                    ownerId: 'aadeadd5-82ad-4000-bae6-4b849a82db51',
                                                    weight: 100,
                                                },
                                            },
                                        })
                                    }
                                >
                                    Add toy
                                </button>
                            )}
                        </Mutation>
                    </div>
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
