import { GraphQLEnumType } from 'graphql';

export default new GraphQLEnumType({
    name: 'Species',
    values: {
        DOG: { value: 'DOG' },
        CAT: { value: 'CAT' },
        HORSE: { value: 'HORSE' },
        DOLPHIN: { value: 'DOLPHIN' },
    },
});
