import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

const UserProfile: React.FC = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (auth.currentUser) {
        const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid));
        if (userDoc.exists()) {
          setProfile(userDoc.data());
        }
      }
    };

    fetchUserProfile();
  }, []);

  if (!profile) {
    return <div className="mt-5 text-white">waiting...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Email: {profile.email}</p>
      <p>Created At: {profile.createdAt.toDate().toString()}</p>
    </div>
  );
};

export default UserProfile;
