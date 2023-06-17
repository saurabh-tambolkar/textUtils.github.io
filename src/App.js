// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  // const[alert,setAlert]=useState(null);

  // const showAlert=(message,type)=>{
  //   setAlert({
  //     msg:message,
  //     type:type
  //   })
  // }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-secondary~')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042744";
      // showAlert("dark mode has been enabled","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("light mode has been enabled","success");
    }
  };

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={"this is alert"}/>
      <div className="container my-3">
        
        <Textform heading="Enter the text here to analyze" mode={mode}/>  
      </div>    */}

      <Router>

        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={"this is alert"} />

        <div className="container my-3">

          <Routes>
            <Route exact path="/" element={<Textform heading="Enter the text here to analyze" mode={mode} />} />
            <Route exact path="/about" element={<About mode={mode}/>} />
          </Routes>

        </div>

      </Router>
    </>
  );
}

export default App;

/* //class by className
//for by htmlFor */
