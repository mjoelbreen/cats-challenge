import React, { Component } from 'react'
import moment from 'moment'
import Cat from '../Cat/Cat.js'

import './CatList.css'



const CatList = ({ cats, handleDelete }) => {
    const renderCat = cat => {
        return(
            <div className="Cat">

            </div>
        )

    }

   
const formatDate = () => {
    
    cats.forEach(cat => {
        let m = moment(cat.birthdate);
        return m.format('dd-m-yyyy');
    })}
    formatDate();
    
    
    


    return (
        <div className="cat-list">
            <h1>Cats!</h1>
            {cats.map((cat) => (
                <a className='cat-preview' key={cat.id} onClick={renderCat}>
                    <img className="preview-image" src={ cat.thumbnail_url } alt={ cat.name }/>
                    
                    <p className="preview-name">Name: { cat.name }</p>
                    
                    <p className="preview-birthDate" >Birthdate: {cat.birthdate}  </p>
                    {/* <button onClick={() => handleDelete(cat.id)}>Delete Cat</button> */}
                </a>
            ))}
        </div>
    );
}

export default CatList;