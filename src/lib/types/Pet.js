import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
} from 'graphql';

import Species from './Species';

export default new GraphQLObjectType({
    name: 'Pet',
    fields: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        species: { type: new GraphQLNonNull(Species) },
    },
});
