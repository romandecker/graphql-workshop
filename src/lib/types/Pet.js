import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
} from 'graphql';

import { getToysByPet, getFriendsByPet } from '../db';

import Species from './Species';
import Toy from './Toy';

const Pet = new GraphQLObjectType({
    name: 'Pet',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        species: { type: new GraphQLNonNull(Species) },
        friends: {
            type: new GraphQLNonNull(new GraphQLList(Pet)),
            resolve: (pet) => getFriendsByPet(pet),
        },
        toysPlayedWith: {
            type: new GraphQLNonNull(new GraphQLList(Toy)),
            resolve: (pet) => getToysByPet(pet),
        },
    }),
});

export default Pet;
