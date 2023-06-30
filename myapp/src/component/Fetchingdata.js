import React from 'react'
import { useEffect , useState } from 'react';
const Fetchingdata = () => {

    const[state , setState] = useState([]);

    let fetchedData = async() =>{
        let data = await fetch("https://jsonplaceholder.typicode.com/users");
        let jsondata = await data.json();
        setState(jsondata);
        console.log(jsondata);
    }

    useEffect(()=>{
        fetchedData();
    },[])
   
  return (    
      <div>
      <h1>Users</h1>
      <div>
    
      {
        state.map((el)=>{
     return <div style={{border : "2px solid black" , height : "100px" , width:"200px" , margin:"auto"}}>
     <h3>{el.name}</h3> 
     <p>{el.website}</p>
     </div>
        })
       }
      </div>
      </div>  
     
  )
}

export default Fetchingdata
