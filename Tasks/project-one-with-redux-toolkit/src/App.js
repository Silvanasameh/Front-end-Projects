import React from "react";
import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostsList from "./features/posts/PostsList";
import PostDetailPage from "./features/posts/PostDetailPage"; 
function App() {
  return (
    <>
    <Header/>
    <Router>
    <Routes> 
    <Route path="/posts/:postId" element={<PostDetailPage />} />
    </Routes>
    </Router>
    
    <Footer/>
    </>
   
  );
}

export default App;