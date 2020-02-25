const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const mongoose = require('mongoose');

const resolvers = require('./resolvers');

mongoose.connect(
  'mongodb+srv://username:password@projetos-uiayt.mongodb.net/crud?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
  }
);

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers
});

server.start();
