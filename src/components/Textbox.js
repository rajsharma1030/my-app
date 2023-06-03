import React,{useState} from 'react'
import Alert from './Alert'

export default function Textbox(props) {
  const[alert, setAlert] = useState(null)

  const handleUpperCase = (event)=>{
    event.preventDefault();
    let upperTextConvert = text.toUpperCase();
    setText(upperTextConvert)
    props.setAlert("Converted To Uppercase")
    setTimeout(()=>{
        setAlert(null)
      },2000);
  }
  const handleLowerCase =(event)=>{
    event.preventDefault();
    let lowerTextConvert = text.toLowerCase();
    setText(lowerTextConvert);
    props.setAlert("Converted To Lowercase")
      setTimeout(()=>{
        setAlert(null)
      },2000);
  }

  const handleClear = (event)=>{
    event.preventDefault();
    // let cleartext = "";
    setText("")
    props.setAlert("Clear")
    setTimeout(()=>{
      setAlert(null)
    },2000);
  }
  const handleInputChange =(event) => {
    console.log( "On change");
    setText(event.target.value);
  }
  

  const [text,setText] = useState("")
  return(

   < div className={`container bg-${props.mode} `}>
   <form action="">
    <div className="mb-3">
    <label htmlFor="textenter" className={`form-label text-${props.mode === "light"? "dark":"light"}`} >Enter You Text</label>
    
    <textarea className={`form-control bg-${props.mode} text-${props.mode === "light"? "dark":"light"}`} id="textenter" rows="6" value={text} onChange={handleInputChange} placeholder='Enter Text Here'></textarea>
    </div>
    <button onClick={handleUpperCase} className='btn btn-danger mx-2'>Upper case</button>
    <button onClick={handleLowerCase} className='btn btn-danger mx-2'>Lower case</button>
    {/* <button onClick={handleTitleCase} className='btn btn-danger mx-2'>Title Case</button> */}
    <button onClick={handleClear} className='btn btn-warning mx-2'>Clear</button>
    </form>

    <h2 className={`textsummary text-${props.mode === "light"? "dark":"light"}`}>Your Text Summary</h2>
    <p className={`text-${props.mode === "light"? "dark":"light"}`}>{text.split(' ').length} words and {text.length} characters</p>
    <p className={`text-${props.mode === "light"? "dark":"light"}`}>{0.008 * text.split(' ').length} Time Required to Read this para</p>
    <h3 className={`text-${props.mode === "light"? "dark":"light"}`}>Preview</h3>
    <p className={`text-${props.mode === "light"? "dark":"light"}`}>{text}</p>
   </div>

  )
}
