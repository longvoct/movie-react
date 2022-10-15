import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase-config";

const FirebaseAuth = () => {
  const auth = getAuth();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUserInfo(currentUser);
      } else {
        setUserInfo("");
      }
    });
  }, []);
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      // console.log("handleCreateUser ~ user", user);
      // if (user) setUserInfo(user);
      await updateProfile(auth.currentUser, {
        displayName: "Tuan Tran",
      });
      setUserInfo(user);
      console.log("Create user successfully");
    } catch (err) {}
  };
  // console.log(values);
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 rounded-lg mb-10 mt-6 border border-blue-400">
      <form onSubmit={handleCreateUser}>
        <input
          type="text"
          className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
          name="email"
          placeholder="Enter your email address"
          onChange={handleInputChange}
        />

        <input
          type="password"
          className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
          name="password"
          placeholder="Enter your password"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white tex-sm font-medium rounded-lg"
        >
          Sign up
        </button>
      </form>
      {/* interface  */}
      <div className="mt-10 flex items-center gap-x-5">
        <span>{userInfo?.displayName}</span>
        <button
          className="py-3 px-5 bg-purple-500 text-white text-sm font-medium rounded-lg"
          type="submit"
          onClick={handleSignOut}
        >
          SignOut
        </button>
      </div>
    </div>
  );
};

export default FirebaseAuth;
