import { useEffect, useState } from "react";
import { getData } from "../services/fetchData";

export const usePosts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [postsArray, setPostsArray] = useState([]);

  const getPostsData = async ()=>{
    try{
      const data = await getData();
      setPostsArray(data.data);
    }catch(error){
      console.log(error);
    };
  };

  useEffect(()=>{
    getPostsData();
  },[]);

  return {
    isLoading,
    postsArray
  };
};
 