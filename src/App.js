
import { Search} from '@material-ui/icons';
import {TextField} from "@material-ui/core"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Fragment } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [data,setdata]=useState([])
  const [text, settext] = useState("");
  const [searched, setsearched] = useState("")
  const [delayedtext, setdelayedtext] = useState("")
  const animeapi = async () => {
    try {
      const adata = await axios.get(
        `https://kitsu.io/api/edge/anime?filter[text]=${searched}`
      );
      
      setdata(adata)
      
    } catch (error) {
      console.log(error);
    }
  };
  const handleschange=(e)=>{
    setdelayedtext(e)
    console.log(delayedtext)
        }
  
   
  useEffect(() => {
    animeapi();
   console.log(searched)
    
  }, [searched]);
 



  return (
    <Fragment>
 <TextField color="secondary" id="standard-search" label="Search Anime" type="search" onChange={(e)=>{handleschange(e.target.value)}}></TextField>

 
 <Search style={{paddingLeft:"20px"}}></Search>
  <Header text={text} settext={settext}searched={searched} setsearched={setsearched}></Header>
  <div className="container">
  <div className="sidebarcontainer">
    <Sidebar></Sidebar>
    </div>
  
    <div className="cardcontainer">
  <Card data={data} ></Card>
  
  </div>

  </div>
 

  </Fragment>
   
  );
}

export default App;
