"use client"
import { signOut } from "next-auth/react"

export function SignOut() {
    const handleSignOut = async () => {
        try {
            await signOut({ redirect: true, callbackUrl: "/" });
            console.log("Sign out successful");
        } catch (error) {
            console.error("Sign out failed: ", error);
        }
    };

    return (
        <button onClick={handleSignOut}>Sign out</button>
    );
}