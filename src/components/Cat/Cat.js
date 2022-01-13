import React, { Component } from 'react'

import {
    CatContainer,
    ImageContainer,
    CatName,
    CatDetails,
    BigCat
} from './CatStyle.js'






class Cat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
       

    
       
    
    }

   


    

  

    


    render() {
    
        const {
            id,
            name,
            birthdate,
            owner_name,
            thumbnail_url,
            views_count
        } = this.props;

        let currentIndex = 0;

        const selectCat = () => {
            const {id} = this.props;
            
            console.log(id)
           currentIndex = id;
          
           
     
            
        }

        let isClicked = false;

        return(
            <div>
                
            <div style={CatContainer}>
                
                
                
                    
                    <img src={`${thumbnail_url}`} alt={name} style={ImageContainer}  />
                <h2 style={CatName}>{name}</h2>
                <p style={CatDetails}>{birthdate}</p>
                <p style={CatDetails}>{owner_name}</p>
                <p style={CatDetails}>{views_count}</p>
                <button onClick={selectCat}>Select</button> 
                </div>
                </div>
                )
                
            
              
          
     
                }
            }    
    





export default Cat