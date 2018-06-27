import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql';

export default new GraphQLInputObjectType({
    name: 'ToyInput',
    fields: () => ({
        name: { type: new GraphQLNonNull(GraphQLString) },
        weight: { type: new GraphQLNonNull(GraphQLInt) },
        ownerId: { type: new GraphQLNonNull(GraphQLString) },
    }),
});
