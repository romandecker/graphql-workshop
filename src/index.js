import 'source-map-support/register';
import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './lib/schema';

const app = express();

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    }),
);

// eslint-disable-next-line no-console
app.listen(7777, () => console.log('GraphQL endpoint listening on http://localhost:7777/graphql'));
