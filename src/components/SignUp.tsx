import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig"; // Adjust the path as necessary
import { doc, setDoc } from "firebase/firestore";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    try {
      console.log("Starting sign up process...");
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User credential:", userCredential);
      const user = userCredential.user;

      // Create user profile in Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        fullName: fullName,
        message: message,
        createdAt: new Date(),
        // Add any other profile fields here
      });

      console.log("User created and profile saved:", user);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        className="w-full mb-2 px-1"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        className="w-full mb-2 px-1"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full px-1 mb-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <textarea
        name="message"
        className="px-1 mb-2"
        id="message"
        placeholder="Leave a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button className=" bg-orange shadow-md px-2" onClick={handleSignUp}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
