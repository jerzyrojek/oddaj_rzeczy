import app from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth();
        this.database = app.firestore();
    }


    newUserEmailAndPassword = (email, password) => {
        return this.auth.createUserWithEmailAndPassword(email, password);
    };

    signInEmailAndPassword = (email, password) => {
        return this.auth.signInWithEmailAndPassword(email, password);
    };

    signOut = () => this.auth.signOut();

    onAuthUserListener = (next, fallback) =>
        this.auth.onAuthStateChanged(authUser => {
            if (authUser) {
                this.database.collection("users").doc(authUser.uid)
                    .get().then(snapshot => {
                    const databaseUser = snapshot.data();
                    authUser = {
                        uid: authUser.uid,
                        email: authUser.email,
                        ...(databaseUser)
                    }
                    next(authUser);
                });
            } else {
                fallback();
            }
        });

}

export default Firebase;