const { ApolloServer, PubSub } = require('apollo-server');
const mongoose = require('mongoose');

const { PORT, MONGODB } = require('./config');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers/')

const pubsub = new PubSub();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req, pubsub })
});

mongoose.connect(MONGODB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('MongoDB  connected')
        return server.listen(PORT);
    })
    .then((res) => {
        console.log(`Server is running at ${res.url}`)
    })
    .catch(error => {
        console.log(error)
    });
