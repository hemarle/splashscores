import "./App.css";
import Detail from "./Detail";
import Home from "./Home";
import Navigation from "./Navigation";
import Splash from "./Splash";
import Standing from "./Standing";
import Table from "./Table";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/splash" element={<Splash />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/standing" element={<Standing />} />
          <Route path="/table" element={<Table />} />
        </Routes>
        {/* <Navigation /> */}
     
    </div>
  );
}

export default App;
