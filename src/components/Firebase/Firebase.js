
import * as firebase from "firebase";

export default class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        if (!firebase.apps.length) {
            firebase.initializeApp({
            apiKey: "AIzaSyDgKP09XY7SLarZFMBbG0qPai_u9VNg2PQ",
            authDomain: "retailapp-fe8bc.firebaseapp.com",
            databaseURL: "https://retailapp-fe8bc.firebaseio.com",
            projectId: "retailapp-fe8bc",
            storageBucket: "retailapp-fe8bc.appspot.com",
            messagingSenderId: "23053084040"
            });
        } else {
            firebase.app();
        }
    }

}