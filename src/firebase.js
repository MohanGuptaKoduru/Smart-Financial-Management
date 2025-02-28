import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    sendPasswordResetEmail, 
    signOut 
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBi7t-rbrz5E7lrC7uSV9urrcdMnbJBN6k",
    authDomain: "sample-firebase-ai-app-b87d2.firebaseapp.com",
    projectId: "sample-firebase-ai-app-b87d2",
    storageBucket: "sample-firebase-ai-app-b87d2.appspot.com",
    messagingSenderId: "1027443327876",
    appId: "1:1027443327876:web:329ca2565b0a002b05d3d1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();

const storeUserInFirestore = async (user, name) => {
    if (!user) return;
    
    try {
        const userRef = doc(db, "users", user.uid);
        const userSnapshot = await getDoc(userRef);

        if (!userSnapshot.exists()) {
            await setDoc(userRef, {
                uid: user.uid,
                name: name || "No Name",
                email: user.email,
                createdAt: new Date()
            });
        }
    } catch (error) {
        console.error("Error storing user:", error);
    }
};

const fetchUserData = async (uid) => {
    try {
        const userRef = doc(db, "users", uid);
        const userSnapshot = await getDoc(userRef);

        if (userSnapshot.exists()) {
            return userSnapshot.data();
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
    }
};

const resetPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        console.log("Password reset email sent.");
    } catch (error) {
        console.error("Error resetting password:", error);
    }
};

const logout = async () => {
    try {
        await signOut(auth);
        console.log("User signed out successfully.");
    } catch (error) {
        console.error("Sign-out error:", error);
    }
};

export { 
    auth, 
    provider, 
    signInWithPopup, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    sendPasswordResetEmail, 
    storeUserInFirestore, 
    fetchUserData,
    resetPassword, 
    logout
};