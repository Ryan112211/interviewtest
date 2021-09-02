
import React from 'react'
import "./Card.css"

function Card({data}) {
   
    return (
        <>
       
        {
            data!="" &&
            data.data.data.map((anime)=>(

        
        
      
        <div className="cardbody">
         <div className="cardheader">
           <h1>{anime.attributes.titles.en?anime.attributes.titles.en:"No Title"}</h1> 

             
             </div>  
             <div className="cardimage">
              <img src={anime.attributes.posterImage.large}></img>   
                 
                 </div> 
            <div className="carddesc">
                <p>{anime.attributes.ageRating}</p>
            </div>
            
            </div>   
         
                ))
            }
        
      </>
        
    )
}

export default Card
