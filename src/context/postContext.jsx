import { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getData } from "../services/fetchData";

export const postContext = createContext();

export const PostProvider = ({children}) => {
  const { data, error, isLoading } = useQuery(["posts"],getData);

  // const [isLoading, setIsLoading] = useState(false);
  // const [postsArray, setPostsArray] = useState([]);
  // const [errorMsg, setErrorMsg] = useState("");

  // const getPostsData = async ()=>{
  //   setIsLoading(true);
  //   try{
  //     const data = await getData();
  //     setPostsArray(data.data);
  //     setIsLoading(false);
  //   }catch(error){
  //     setErrorMsg(error);
  //   };
  // };

  // useEffect(()=>{
  //   getPostsData();
  // },[]);

  return (<postContext.Provider value={{
    isLoading,
    postsArray:data,
    errorMsg:error    
  }}>
    {children}
  </postContext.Provider>);
};
 
export default PostProvider;