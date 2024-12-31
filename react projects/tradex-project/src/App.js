import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Homepage from "./pages/Homepage.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import ScrollToTopButton from "./Components/ScrollToTopButton";
function App() {
  return (
    <Router>
       <Header/> 
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/contact" element={<Contact />} />  
      </Routes>
      <Footer/>
      <ScrollToTopButton/>
    </Router>
   
    
  
  );
}

export default App;
