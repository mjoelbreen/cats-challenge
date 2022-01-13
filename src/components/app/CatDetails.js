import { useState, useEffect } from 'react'
import {cats} from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch'


const CatDetails = ({cats}) => {
 
   const { id } = useParams();
   const { data: cat, isPending, error} = useFetch('http://localhost:8000/cats/' + this.id);

   const handleDelete = () => {
        fetch('http://localhost:8000/cats/' + this.id, {
            method: 'DELETE'
        }) .then(() => {
            console.log("cat deleted")

        })
   }

//    const apiGet = () => {
//     fetch('http://localhost:8000/cats' + id)
//     .then(function(response){
//       console.log(response)
//       return response.json();
//     })
//     .then(function(data) {
//       console.log(data);
//       setCats(data)
//     });
//    }

    return (
        <div className='Cat'>
            <h2>{ cat.name }</h2>
            <img src={cat.thumbnail_url}/>
            <p>{cat.owner}</p>
            <button onClick={handleDelete}>Delete</button>
            
        </div>
    );
}

export default CatDetails