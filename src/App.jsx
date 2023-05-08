import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import Alert from './Components/Alert';
// import About from './Components/About';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const[Mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  

 let toggleMode = ()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#13748f';
      showAlert("Dark mode has been enabled",'success')
      // document.title = "My App - Dark Mode";
    //   setInterval(() => {
    //     document.title = "My App  is Amazing";
    // }, 2000);
    // setInterval(() => {
    //     document.title = "Install My App";
    // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled",'success')
      // document.title = "My App - Light Mode"; 
    }
  }
  return (
    <>
    {/* <Router > */}
  <Navbar title="My App" mode={Mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
  <div>
  {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About mode={Mode}/> */}
          {/* </Route>  */}
          {/* <Route exact path="/"> */}
           <Form showAlert={showAlert} heading="Enter the text analysis" mode={Mode}/>
          {/* </Route> */}
        {/* </Switch> */}
        </div>
    {/* </Router> */}
    </>
  );
}

export default App;
