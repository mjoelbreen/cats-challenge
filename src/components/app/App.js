import React,{useState,useEffect} from 'react';
import CatList from '../CatList/CatList.js'
import moment from 'moment';


function App() {
  const [cats,setCats]=useState(null);
  const getData=()=>{
    fetch('http://localhost:8000/cats')
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        setCats(data)
      });
  }







  const handleDelete = (id) => {
    let newCats = cats.filter(cat => cat.id !== id);
    setCats(newCats); 
  };

  

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="Cat"> {cats && <CatList cats={cats} name="All Cats" handleDelete={handleDelete} />}
     </div>
  )
}

export default App;