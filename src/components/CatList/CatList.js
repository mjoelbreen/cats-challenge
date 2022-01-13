import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import Popup from 'reactjs-popup'
import useFetch from '../App/useFetch.js'
import ReactDOM from 'react-dom'
import EditForm from '../App/EditForm.js'
import CatDetails from '../App/CatDetails'
import Cat, {selectCat} from '../Cat/Cat.js'
import './CatList.css'
import { render } from '@testing-library/react'







const CatList = ({ cats }) => {
   
   const getCatId = () => {
       return 
   }
  const [thumbnailURL, setThumbnailURL] = useState('');
  const [id, getId] = useState('')
   const [name, setName] = useState('');
    const [owner, setOwner] = useState('');

const [cat, setCat] = useState('');





const renderForm = () => {
//    ReactDOM.render(
//        <EditForm />,
//        document.getElementById('root')
//    )
    return(
        <div>

        </div>
    )
}


const handleDelete = (id) => {

  
    fetch('http://localhost:8000/cats/' + id)
        method: 'GET'
    .then(response => {
        return delete response[id]
    })
     .then((response) => {
       
        console.log("cat deleted")

    })
}




let catImg = document.getElementById('catImage')
let catName = document.getElementById('catName')

const bigCat = document.getElementById("cat-render")

const deleteMe = () => {
    bigCat.style.display = "none";
}

    
 

const renderCat = () => {
    return(
        <div className="Cat">
            <img className="image-container" src={bigCat.src}/>
        </div>
    )
}

// const renderCat = () =>  {
   
//     return (
        
//         <div id="bigCat" className="Cat">
//         <img className="image-container" value={thumbnailURL}  src={thumbnailURL} />
//         <h2>{name}</h2>
//         <div>
//         <Popup  trigger={<button>Edit</button>}
//         position = "relative" margin="1%">
//             <div className="box"><EditForm /></div>
            
//         </Popup>
//         </div>
//         <button onClick={handleDelete(cat.id)}>Delete</button>
//         </div>
        
//     )

//     }
const indexChange = () => {

    let catIndex = 0;
}


        return(
            <div>
               
            <div id="cat-render" className="Cat">
            <img id="cat-image" className="image-container" value={thumbnailURL}  src={cats[0].thumbnail_url} />
            <h2 id="cat-name">{cats[0].name}</h2>
            <p>Birthdate: {cats[0].birthdate}</p>
            <p>Owner: {cats[0].owner_name}</p>
            <p>Views Count: {cats[0].views_count}</p>
            <div>
            <Popup  trigger={<button>Edit</button>}
            position = "relative" margin="1%">
                <div className="box"><EditForm /></div>
                
            </Popup>
            </div>
            <button onClick={deleteMe}>Delete</button>
           
        </div>
                

            <div className="cat-list">
                
            {cats.map((cat, index) => {

                  console.log(index)
                  return (
                  <a className="cat-preview" key={cat.id} value={cat}  >
                  {/* <Cat key={cat.id}  {...cat} onClick={renderCat}/> */}
                  <img className="preview-image" src={cat.thumbnail_url} />
               <h2 value={name}>Name: {cat.name}</h2>
                <p>Birthdate: {cat.birthdate}</p>
                <button>Select</button>
                {/* <button id={cat.id} onClick={handleDelete}>Delete</button> */}
                
                  </a>
            )})}
        
            </div>
              
            
          
        </div>
  
        )
    }
    

        
      





 
    // const changeCurrentCat = (id) => {
    //     console.log(currentCat);
    //     currentCat = cat.id;
    // }

   
// const formatDate = () => {
    
//     cats.forEach(cat => {
//         let m = moment(cat.birthdate);
//         return m.format('dd-m-yyyy');
//     })}
//     formatDate();
    
    
    


    // return (
    //     <div>
           
    //         <h1>Cats!</h1>
    //         {/* <span className="Cat">
    //         <img className="image-container" src={currentCat.thumbnail_url} />
    //            <h2>Name: {currentCat.name}</h2>
    //             <p>Birthdate: {currentCat.birthdate}</p>
    //             <p>Owner: {currentCat.owner_name}</p>
    //            <p>Number of Views: {currentCat.views_count}</p>
            
    //         </span> */}
    //         <div>{renderCat}</div>
    //         <div>{catList()}</div>
        
    //     </div>
    // );
        


export default CatList;