import { NonEmptyArray } from "type-graphql";
import { GetUsersResolver, PingResolver } from "./queries";

const resolvers: NonEmptyArray<Function> = [
    PingResolver,
    GetUsersResolver
]

export { resolvers };