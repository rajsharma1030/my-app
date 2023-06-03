
import './App.css';
import Navbar from './components/Navbar'
import Textbox from './components/Textbox'
import About from './components/About';
import React,{useState} from 'react'
import Alert from './components/Alert';


function App() {

  const[mode, setMode] = useState('light')
  const[modeText,setModeText] =useState('Enable Dark Mode')
  const[alert, setAlert] = useState(null)


  let handlemode = ()=>{
    if(mode=== "light"){
      setMode("dark")
      setModeText("Enable Light Mode")
      setAlert("Dark Mode Selected")
      setTimeout(()=>{
        setAlert(null)
      },2000);
    }
    else{
      setMode("light",
      {
        color: "black"
      })
      setModeText("Enable Dark Mode")
      setAlert("Light Mode Selected")
      setTimeout(()=>{
        setAlert(null)
      },2000);
    }
  }
  
  return (
   
    <div className={`bg-${mode}`}>
    <Navbar logo ="Ehoreca" homepage="Main" mode={mode} handlemode ={handlemode} modeText={modeText}/>
    <Alert alert={alert}/>
    <Textbox setAlert={setAlert}  mode={mode} />
    <About mode={mode} /> 
    </div>
   
  );
}

export default App;
