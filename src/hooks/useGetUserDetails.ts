import { useEffect, useState } from "react";
import { getUser, getUserDetails } from "../services/auth.services";

const useGetUserDetails = () => {
  const [userDetails, setUserDetails] = useState({} as UserDetails);

  const user = getUser(localStorage.getItem("token") as string);

  useEffect(() => {
    const controller = new AbortController();
    if (user !== null) {
      getUserDetails(user.sub as number, (data) => {
        setUserDetails(data);
      });
    }
    return () => {
      controller.abort();
    };
  }, []);

  return userDetails;
};

export default useGetUserDetails;
