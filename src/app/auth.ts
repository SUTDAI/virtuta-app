'use server'
import { cookies } from 'next/headers'
const jwt = require("jsonwebtoken");
import { useRouter } from "next/navigation";

export const autenticate_user = async (user: any) => {
  const endpoint = "http://localhost:3001/user/login";
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const errorMessage = await response.json();
      // Handle specific error status codes
      if (response.status === 400) {
        // Change input HTML style here for bad request (e.g., add a class to highlight inputs)
        console.log(errorMessage.message);
      } else if (response.status === 404) {
        // Change input HTML style here for unauthorized (e.g., add a class to highlight inputs)
        console.log(errorMessage.message);
      } else {
        throw new Error("Failed to login");
      }
    } else {
      const data = await response.json();
      cookies().set('token', data.token);

      const secret = process.env.NEXTAUTH_SECRET;
      if (!secret) {
        throw new Error('NEXTAUTH_SECRET environment variable is not defined');
      }

      const decoded = jwt.verify(data.token, secret);

      if (decoded?.accountType === 1) {
        return "/users/student"
      } else if (decoded?.accountType === 2) {
        return "/users/teacher"
      } else {

      }
    }
  } catch (error) {
    console.error("Fetch error:", error);
    // Handle the error (e.g., show an error message to the user)
  }
};

export const get_details = async () => {
  try {
    const response = {
      code: 0
    }
    const cookie = cookies().get('token')
    const secret = process.env.NEXTAUTH_SECRET;
    if (!cookie) {
      response.code = 1
      return response
    }
    if (!secret) {
      throw new Error('NEXTAUTH_SECRET environment variable is not defined');
    }

    const decoded = await jwt.verify(cookie.value, secret);
    return { ...response, ...decoded };
  } catch (error) {
    console.error('Error decoding token:', error);
    // Handle decoding error
    return null;
  }
}
