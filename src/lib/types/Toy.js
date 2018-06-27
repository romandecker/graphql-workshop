import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql';

import Pet from './Pet';
import { getPetById } from '../db';

export default new GraphQLObjectType({
    name: 'Toy',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        weight: { type: new GraphQLNonNull(GraphQLInt) },
        owner: {
            type: new GraphQLNonNull(Pet),
            resolve: (toy) => getPetById(toy.ownerId),
        },
    }),
});
