import { SignIn } from "@/@types";
import { firebase } from "@/config/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

async function signin({email, password}:SignIn){
    try {
        const user = await signInWithEmailAndPassword(firebase.auth, email, password)
        return user
    } catch (error) {
        console.error(error)
    }
}


export const authService = {
    signin
}