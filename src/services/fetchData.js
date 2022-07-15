import axios from 'axios';

const instance = ()=>axios.create({
  baseURL:"http://localhost:3000/posts"
});

export const getData = () =>{
 return instance().get()
 .then(res=>res.data)
 .catch(err=>err)
};