import axios from "axios";
import { getSession } from "next-auth/react";

const axiosSecure = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

axiosSecure.interceptors.request.use(async (config) => {
  const session = await getSession();
  if (session?.user?.token) {
    config.headers.Authorization = `Bearer ${session.user.token}`;
  }
  return config;
});

export default axiosSecure;
