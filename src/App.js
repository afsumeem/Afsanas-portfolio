import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import Blogs from './Pages/Blog/Blogs/Blogs';
import Projects from './Pages/Projects/Projects/Projects';

function App() {
  return (
    <div className="App">
      <div class="area" >

        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/allProject" element={<Projects />} />
          <Route path="/product/:id" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
