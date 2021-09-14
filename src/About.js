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
    <>
    <ul>
    {data.map(item => (
      // console.log("item",item.gender)
       <li key={item.id}>{item.name.title} {item.name.first} {item.name.last}</li>
    ))}
    </ul>
      <h1>
        When I first joined Twitter there were many lists going around of Devs
        to follow. They were exclusively spotlighting males. I decided to spend
        some free time reaching out to the inspiring women who are making a
        positive impact in the tech community.
      </h1>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count + 1)}>add</button>
      <button onClick={()=> setCount(count - 1)}>Minus</button>
      <br></br>
      <button onClick={fetchData}>Click to Fetch Data</button>
      
    </>
  );
};

export default About;
