import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const[myStyle,setMyStyle]=useState({
    color:'black',
    backgroundColor:'white'
  })
  const[btntext,setBtnText]=useState("Enable Dark Mode");
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')

  }

  const toggleStyle=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    console.log(cls)
    if(myStyle.color==='white'){
      setMyStyle({
        color:'black',
        backgroundColor:'white'
      })
      setBtnText("Enable dark Mode")
      document.body.style.backgroundColor="white"
    }
    else{
      setMyStyle({
        color:'white',
        backgroundColor:'#343a40',
      })
      setBtnText("Enable light Mode")
      document.body.style.backgroundColor="#343a40"
    }
  }
  return (
    <>
      <Router> 
        <Navbar title="TextUtiles" aboutText="about" onToggleDarkMode={toggleStyle} btntext={btntext} mode={myStyle.color}/> 
        <div className="container my-3">
        <Routes>   
          <Route exact path="/about" element={<About />} />{/*exact is done to avoid partial matching */}
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={myStyle.color}></TextForm>} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
