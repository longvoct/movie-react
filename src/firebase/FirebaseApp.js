import React from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  getDoc,
  where,
  orderBy,
  limit,
  query,
} from "firebase/firestore";
import { db } from "./firebase-config";
import { useEffect } from "react";
import { useState } from "react";

const FirebaseApp = () => {
  const colRef = collection(db, "posts");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [postID, setPostID] = useState("");
  const [posts, setPosts] = useState("");
  const [singlePost, setSinglePost] = useState("");

  useEffect(() => {
    //1. Get Collection data (posts); Collection Reference
    // getDocs(colRef).then((snapshot) => {
    //   let posts = [];
    //   snapshot.docs.forEach((doc) => {
    //     posts.push({
    //       id: doc.id,
    //       ...doc.data(),
    //     });
    //   });
    //   setPosts(posts);
    // });
    //2. Get document in realtime
    onSnapshot(colRef, (snapshot) => {
      console.log(snapshot);
      let posts = [];
      console.log("snapshot.docs.id: ", snapshot.docs.id);
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(posts);
    });

    const docRefSingle = doc(db, "posts", "RQL9wVmnD0n9M1qAPhBp");
    // getDoc(docRefSingle).then((doc) => {
    //   console.log(doc.id, doc.data());
    // });

    onSnapshot(docRefSingle, (doc) => {
      console.log(doc.id, doc.data());
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddPost = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      title,
      author,
      createdAt: serverTimestamp(),
    })
      .then(() => {
        console.log("success!");
        //reset form
      })
      .catch((error) => {
        console.log(error);
        //reset form
      });
    console.log("submit");
  };

  const handleRemovePost = async (e) => {
    e.preventDefault();
    const colRefDelete = doc(db, "posts", postID);
    await deleteDoc(colRefDelete);
    console.log("success");
  };
  // createAt
  const handleUpdatePost = async (e) => {
    e.preventDefault();
    const colRefUpdate = doc(db, "posts", postID);
    await updateDoc(colRefUpdate, {
      title: "This is a new title from update function",
    });
    console.log("success");
  };

  useEffect(() => {
    //Firestore queries'
    // const colRefQuery = collection(db, "posts");
    const q = query(
      colRef,
      where("author", "==", "Vegeta"),
      // orderBy("title"),
      limit(3)
    );
    // console.log("eseEffect ~ q", q);
    onSnapshot(q, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log(posts);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 rounded-lg mb-10">
        <form onSubmit={handleAddPost}>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white tex-sm font-medium rounded-lg"
          >
            Add post
          </button>
        </form>
      </div>

      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 rounded-lg mb-10">
        <form onSubmit={handleRemovePost}>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your id"
            name="title"
            onChange={(e) => setPostID(e.target.value)}
          />

          <button
            type="submit"
            className="w-full p-3 bg-red-500 text-white tex-sm font-medium rounded-lg"
          >
            Remove post
          </button>
        </form>
      </div>

      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 rounded-lg mb-10">
        <form onSubmit={handleUpdatePost}>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your id"
            name="title"
            onChange={(e) => setPostID(e.target.value)}
          />

          <button
            type="submit"
            className="w-full p-3 bg-orange-500 text-white tex-sm font-medium rounded-lg"
          >
            Update post
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 rounded-lg mb-10">
        {posts.length > 0 &&
          posts.map((item) => {
            return (
              <div key={item.title}>
                <div>
                  {item.title} - {item.author}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FirebaseApp;
