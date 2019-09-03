import express from "express";
import {ApolloServer} from "apollo-server-express";
import cookieParser from "cookie-parser";

import {port, isDevelopment, url} from "./config";
import {typeDefs} from "./typeDefs/typeDefs";
import {resolvers} from "./resolver/resolver";
import dataBase from "./database/connectDB";
import tokenFy from "./middleware/parseToken";

const startSever = async () => {
  try {
    const app = express();

    app.use(cookieParser());

    let server;
    server = new ApolloServer({
      typeDefs,
      resolvers,
      context: ({req, res}) => ({req, res})
    });

    app.use((req, _, next) => {
      tokenFy(req);
      next();
    });

    server.applyMiddleware({app});

    await dataBase(url, isDevelopment);
    console.log("Connect to " + url);

    app.listen(port, () =>
      console.log(
        `🚀 Server ready at http://localhost:${port}${server.graphqlPath}  `
      )
    );
  } catch (error) {
    if (isDevelopment) console.log(error);
  }
};

startSever();
