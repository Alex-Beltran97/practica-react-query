import { CircularProgress, Link } from "@mui/material";
import { useContext } from "react";
import { postContext } from "../context/postContext";
import { getData } from "../services/fetchData";
import { useQuery } from "react-query";

const Home = () => {
  const { isLoading, postsArray, errorMsg } = useContext(postContext);

  if(errorMsg){
    return <p>Error: {errorMsg}</p>
  }

  return (<>
    {
      isLoading && <CircularProgress />
    }
    {postsArray?.map((item,index)=>{
      const titles = (<li>
        <Link href={`/${item.id}`}>{item.title}</Link>
      </li>);

      return <ul key={index}>{titles}</ul>
    })}
  </>);
};
 
export default Home;