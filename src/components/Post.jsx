import { CircularProgress, Stack } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { postContext } from "../context/postContext";

const Post = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();

  const { postsArray,isLoading,setIsLoading,errorMsg } = useContext(postContext);

  const getPosts = (id)=>{
    if(postsArray){
      setPost(postsArray?.filter(item=>item.id===Number(id)));
    }
  };

  useEffect(() => {
    getPosts(id);
  }, [postsArray]);

  if(errorMsg){
    return <p>Error: {errorMsg}</p>
  }

  return (<>
    {isLoading&&<CircularProgress />}
    {post.map(item=>{
    return (
    <Stack key={item.id}>
        <h1>{item.title}</h1>
        <b>{item.body}</b>
    </Stack>
        )})}
    <button onClick={()=>navigate("/")}>Regresar</button>
  </>);
};
 
export default Post;