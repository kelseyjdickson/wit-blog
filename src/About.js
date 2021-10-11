import React ,{useState, useEffect }from "react";
import axios from 'axios'
const About = () => {
  const [count, setCount ] = useState(0)
  const [data, setData ]= useState([])
  
  const fetchData = () => {
    return axios.get("https://randomuser.me/api")
    .then(res => {
      console.log(res)
      return <h1>{res}</h1>
    })
    .catch(err => {
      console.error(err)

    })
  }
  // useEffect(()=>{
  //   fetch("https://randomuser.me/api")
  //   .then(res => res.json())
  //   .then((res)=>{
  //     console.log(res.results)
  //      setData(res.results)
  //   })
  // },[])

  
  return (
    <h1>About</h1>
      
  );
};

export default About;
