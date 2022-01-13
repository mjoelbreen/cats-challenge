import { useState, getData } from 'react'
import CatList from '../CatList/CatList';

const FetchAPI = () => {
    const [cats, setCats] = useState(null);

   const apiGet = () => {
        fetch('http://localhost:8000/cats')
        .then(function(response){
          
          return response.json();
        })
        .then(function(data) {
          console.log(data);
          setCats(data)
        });
    }

    return (
      <div>
        <ul>
          {CatList.map((cat) => (
            <li key={cat.id}>
              {cat.id},
              {cat.name},
              {cat.birthdate},
              {cat.thumbnail_url},
              {cat.owner_name},
              {cat.views_count}
            </li>
          ))}
        </ul>
      </div>
    )
}

export default FetchAPI