import { GraphQLServer } from 'graphql-yoga';
import { importSchema } from 'graphql-import';
import { Prisma } from './generated/prisma';
import { Context } from './utils';

const resolvers = {
  Query: {
    allRecipes(parent, args, context: Context, info) {
      return context.db.query.recipes({}, info);
    },
    recipe(parent, { id }, context: Context, info) {
      return context.db.query.recipe({ where: { id } }, info);
    },
  },
  Mutation: {
    createRecipe(parent, args, context: Context, info) {
      return context.db.mutation.createRecipe({ data: args }, info);
    },
  },
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma DB service
      secret: process.env.PRISMA_SECRET, // specified in database/prisma.yml
      debug: process.env.NODE_ENV === 'development' ? true : false, // log all GraphQL queries & mutations
    }),
  }),
});

server.start(() => console.log('Server is running on http://localhost:4000'));
