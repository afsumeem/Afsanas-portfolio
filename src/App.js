import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Blog/Blogs/Blogs';
import Projects from './Pages/Projects/Projects/Projects';
import Details from './Pages/ProjectDetails/Details/Details';
import ReactDetails from './Pages/Blog/ReactDetails/ReactDetails';
import CrudDetails from './Pages/Blog/CrudDetails/CrudDetails';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/allProject" element={<Projects />} />
          <Route path="/reactDetails" element={<ReactDetails />} />
          <Route path="/crudDetails" element={<CrudDetails />} />
          <Route path="/project/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
