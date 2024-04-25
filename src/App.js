import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

  setTimeout(()=>{
    setAlert(null);
  },1500);
  };

  return (
    <>
      <NavBar title="TextUtils" />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text below to analyse" />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
