import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Fouter";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


  


  const App = () => {
    
 
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={<Home />} />
          <Route path="/Recipes" exact element={<Recipes />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          
        </Routes>
        <Footer />
      </Router> 
      </div>
 );
}

export default App;




