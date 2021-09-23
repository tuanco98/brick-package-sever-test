import { ApolloServer } from "apollo-server";
import { successConsoleLog } from "./color-log";
import { CONFIG_PORT } from "./configs";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

export const initApollo = async () => {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: (req) => ({
        ...req,
      }),
    });
    const { url } = await server.listen({ port: CONFIG_PORT });
    successConsoleLog(`🚀 Apollo server ready at ${url}`);
  } catch (e) {
    throw e;
  }
};
