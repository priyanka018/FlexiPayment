import logo from "./logo.svg";
import "./App.css";
import FirstCompo from "./FirstCompo";
import SecondCompo from "./SecondCompo";
import {BrowserRouter, Route, Routes,Link  } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<FirstCompo />} />
        <Route path="/SecondCompo" element={<SecondCompo/>} />
      </Routes>, 
      </BrowserRouter>
  );
}

export default App;
