import React,{useState,useEffect} from 'react';
import CatList from '../CatList/CatList.js'
import Cat from '../Cat/Cat.js'
import '../CatList/CatList.css'
import useFetch from './useFetch.js'




const Home = () => {
    const { data: cats, isPending, Error} = useFetch('http://localhost:8000/cats');
//   const [cats,setCats]=useState(null);
//   const getData=()=>{
//     fetch('http://localhost:8000/cats')
//       .then(function(response){
//         console.log(response)
//         return response.json();
//       })
//       .then(function(data) {
//         console.log(data);
//         setCats(data)
//       });
//   }










  

//   useEffect(() => {
//     getData()
//   }, []);

  return (
    <div className="cat-list"> 
    {cats && <CatList cats={cats}/>}
    </div>
 
    
     
  );
}

export default Home;