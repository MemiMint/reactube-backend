import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class UserEntity {

    @Field(() => ID)
    public id: string;

    @Field(() => String)
    public firstname: string;

    @Field(() => String)
    public lastname: string;

    @Field(() => String)
    public age: number;
}