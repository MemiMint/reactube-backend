import { initializeApp, FirebaseApp, FirebaseError } from "firebase/app";
import { collection, CollectionReference, DocumentData, Firestore, getFirestore,  } from "firebase/firestore";
import { firebaseConfig } from "./config";

export class FirebaseConnection {
    private firebaseApp: FirebaseApp;
    private fireStore: Firestore;

    /**
     * Initializes a new instance of the FirebaseConnection class.
     * The constructor method will set up the Firebase app and
     * Firestore instance.
     */
    constructor() {
        this.firebaseApp = initializeApp(firebaseConfig);
        this.fireStore = getFirestore(this.firebaseApp);
    }

    /**
     * Returns the Firebase app instance.
     * @returns {FirebaseApp} The Firebase app instance.
     */
    public getFirebaseApp(): FirebaseApp {
        return this.firebaseApp;
    }

    /**
     * Returns the Firestore instance.
     * @returns {Firestore} The Firestore instance.
     */
    public getFireStore(): Firestore {
        return this.fireStore;
    }
}

export class FirebaseCollection {
    private fireStore: Firestore;

    /**
     * Initializes a new instance of the FirebaseCollection class.
     * The constructor method will set up the Firestore instance.
     * @param firestore The Firestore instance.
     */
    constructor(firestore: Firestore) {
        this.fireStore = firestore;
    }

    /**
     * Returns a CollectionReference instance that refers to the specified collection.
     * @param name The name of the collection to return.
     * @returns {CollectionReference<DocumentData, DocumentData>} The CollectionReference instance.
     */
    public getCollection(name: string): CollectionReference<DocumentData, DocumentData> {
        return collection(this.fireStore, name);
    }
}