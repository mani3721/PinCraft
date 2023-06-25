import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import client from '../client'

const Login = () => {

    const navigate=useNavigate()

    const credentialResponse=(response)=>{
        const details =jwt_decode(response.credential)
        console.log(details);
        localStorage.setItem('user', JSON.stringify(details));

        const doc={
            _id:details.sub,
            _type:"user",
            userName:details.name,
            image:details.picture
        }
        client.createIfNotExists(doc).then(() => {
            navigate('/', { replace: true });
          });
    }
  return (
    <>
      <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full ">
          <video
            src=""
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute flex flex-col justify-center items-center top-0 left-0 bottom-0 right-0 bg-blackOverlay">
          <div className="p-5">
            <img src="" width="130px" alt="" />
          </div>
          <div className="shadow-2xl rounded-md">
            <GoogleOAuthProvider clientId="709665547646-hm6759s6bj4mtjnrumpmdsltsen0cdc1.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={credentialResponse}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
