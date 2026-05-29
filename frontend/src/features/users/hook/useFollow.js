import { useState } from "react";
import { follow, unfollow } from "../services/userApi";

export const useFollow = (initialState = false) => {

  const [isfollow, setisfollow] = useState(initialState);
  const [loading, setloading] = useState(false);

  const handleFollow = async (userId) => {
    if (loading) return;

    try {
      setloading(true);

      if (isfollow) {
        await unfollow(userId);
        setisfollow(false);
      } else {
        await follow(userId);
        setisfollow(true);
      }

    } catch (err) {
      console.error(err);
    } finally {
      setloading(false);
    }
  };

  return {
    isfollow,
    loading,
    handleFollow
  };
};