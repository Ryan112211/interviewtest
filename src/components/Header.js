import { Button, Switch, TextField } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React, { useState } from 'react'
import "./Header.css"

function Header({text,settext,searched,setsearched}) {
    const [darkmode, setdarkmode] = useState(false);
  
    const handlechange=()=>{
        setdarkmode(!darkmode);
    }
    const handleschange=(e)=>{
settext(e)

    }
    const handleclick=()=>{
        setsearched(text);
        console.log(searched)
        
    }
    return (
       
        <div className={darkmode?"darkheader":"header"}>
         <img src="https://image.shutterstock.com/image-vector/popcorn-logo-label-symbol-sign-600w-1919550788.jpg"></img>
         <li className={darkmode?"darklist":"list"}>

             <ul>Home</ul>
             <ul>Featured</ul>
             <TextField id="standard-search" label="Search Anime" type="search" onChange={(e)=>{handleschange(e.target.value)}} />
             <Search onClick={handleclick} style={{paddingLeft:"20px"}}></Search>
             <span>Dark Mode<Switch onClick={handlechange}
    
        
       

      />
      </span>
         </li>
        </div>
       
    )
}

export default Header
