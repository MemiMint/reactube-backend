import { Application } from "express";
import { ApolloServer, } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchemaSync } from "type-graphql";
import { resolvers } from "../resolvers";
import dotenv from "dotenv";
import "reflect-metadata";

dotenv.config();

const schema = buildSchemaSync({
    resolvers: resolvers,
    scalarsMap: undefined,
    validate: false
});

export class ApolloService {
    private app: Application;
    private apolloServer: ApolloServer;

    constructor(app: Application) {
        this.app = app;

        this.apolloServer = new ApolloServer({
            schema: schema,
            csrfPrevention: true
        });
    }

    public async startApolloServer() {
        const { url } = await startStandaloneServer(this.apolloServer, {
            context: async ({ req }) => ({ token: req.headers.token }),
            listen: { port: 4000, path: "/graphql" }
        });

        console.log(`graphql server started on port: ${url}`);
    }
}