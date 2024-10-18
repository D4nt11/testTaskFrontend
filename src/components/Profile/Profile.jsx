import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";

const Profile = () => {
    const [user, setUser] = useState([])
  const { id } = useParams();
    const getUserByID = () => {
        fetch(`http://localhost:3000/api/user/${id}`)
        .then((res) => res.json())
        .then((json) => setUser(json))
    }

    console.log(user)

    useEffect(()=>{
        getUserByID()
    }, [])


//   const getUserByID = async (data) => {
//     const response = await axios.get(`http://localhost:3000/api/profile/${id}`, data);
//     alert(response.data.message)
//   };

//   getUserByID()
  return (
    <div className="div">
      <h1>Username:  {user.userName}</h1>
      <h1>Email: {user.email}</h1>
    </div>
  );
};

export default Profile;
