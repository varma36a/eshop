import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import { Fragment } from "react";

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>

          <Route path="/Checkout" element={<Fragment><Header /><Outlet /><Checkout /></Fragment>} /> 
          <Route path="/" element={<Fragment><Header /><Outlet /><Home /></Fragment>} />        

        </Routes>

      </Router>   
    </div>
  );
}

export default App;
    