import React,{ useState,useEffect }from 'react'
import Card from '../Card/Card'
import axios from "axios";
import './App.css'
import Modal from '../Modals/Modal'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
   const [data, setData] = useState([]);
   const [name, setName] = useState("");
   const [url, setUrl] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          `http://localhost:5000/getData`,
        );
       setData(result.data);
      };
      fetchData();
    }, []);

    return(
      <div>
<div className="title">
  <h1>  Plantify 🌱</h1>

  <div>
<Modal name={name} url={url} open={isOpen} onClose={() => setIsOpen(false)}/>
  </div>

  </div>
        <div className="wrapper">{data.map((details)=><Card  
        click={()=> 
          {
             setIsOpen(true);
             setName(details.crop_name);
             setUrl(details.thumbnail_url);
        }} name={details.crop_name}  url ={details.thumbnail_url}/>)}</div>
      </div>
    )
}
export default App
