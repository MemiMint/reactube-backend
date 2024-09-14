import { Query, Resolver } from "type-graphql"
import { UserEntity } from "../../entities/user";
import { FirebaseConnection } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "reflect-metadata";

@Resolver()
export class GetUsersResolver {
    private firebase: FirebaseConnection;

    constructor() {
        this.firebase = new FirebaseConnection();
    }

    @Query(() => [UserEntity])
    async users(): Promise<UserEntity[]> {
        const users: UserEntity[] = [];
        const userCollection = collection(this.firebase.getFireStore(), "users");
        
        const docs = await getDocs(userCollection);

        docs.forEach((doc) => {
            const user: UserEntity = {
                id: doc.id,
                firstname: doc.data().firstname,
                lastname: doc.data().lastname,
                age: doc.data().age
            }
            users.push(user);
        });

        return users;
    }
}