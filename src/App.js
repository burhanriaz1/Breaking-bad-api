import './App.css'
import {useEffect,useState} from 'react'
const App =()=> {


  const [items,setItems]=useState([]);
  useEffect(() => {
    const fetchdata=async()=>{
      const api=await fetch('https://www.breakingbadapi.com/api/characters');
      const apiData=await api.json();
      console.log(apiData);
      console.group();
      setItems(apiData)
    }
    fetchdata();
  },[items])
  return (
    <div className="App">
      {items.map(item => (
        <>
          <div className='card'>
          <img src={item.img} alt="hel"></img>
            <div className='hello flex'>
              <h1>Name:{item.name}</h1>
              <h5>Nickname:{item.nickname}</h5>
              <h5>DOB:{item.birthday}</h5>
              <h5>portrayed By:{item.portrayed}</h5>
            </div>
          </div>
        </>
        ))}
    </div>
  );
}

export default App;
