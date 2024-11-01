"use client";  // Ensure this is at the very top of the file
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useSearchParams } from 'next/navigation'; 
import Link from 'next/link';
import Router from 'next/router';
const VerifyEmail = () => {
  const [token, setToken] = useState<string>(""); // Use camelCase for consistency
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const searchParams = useSearchParams(); // Use searchParams for query parameters

  const verifyUserEmail = async () => {
    try {
        console.log("Start");
        const response = await axios.post("/api/Verifyemail", {
            params: { token } // Send the token as part of params
        });
        console.log("Verification response:", response.data); // Log the response

        if (response.data.success) { // Check for 'success' instead of 'sucess'
            setVerified(true);
            Router.push('/'); // Redirect to the homepage
        } else {
            setError(true); // Set error if verification fails
        }
    } catch (error: any) {
        setError(true);
        console.error("Verification failed:", error); // Log the full error
    }
};


  useEffect(() => {
    setError(false)
    const token = searchParams.get('token');
    setToken(token || "");
  }, [searchParams]);

  useEffect(() => {
    setError(false)
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='text-4xl'>VERIFY EMAIL</h1>
      <h2 className='p-2 bg-yellow-400 text-white'>
        {token ? `${token}` : "No Token"}
      </h2>
      {verified && (
        <div>
          <h2>YOU ARE VERIFIED</h2>
          <Link href="/login">Go To Login</Link>
        </div>
      )}
      {error && (
        <div>
          <h2>ERROR</h2>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;

