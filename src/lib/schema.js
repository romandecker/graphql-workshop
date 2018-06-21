import { GraphQLSchema, GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            greet: {
                type: new GraphQLNonNull(GraphQLString),
                resolve: () => 'Hey there!',
            },
        },
    }),
});
