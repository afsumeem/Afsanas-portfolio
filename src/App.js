import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Blog/Blogs/Blogs';
import Projects from './Pages/Projects/Projects/Projects';
import ReactDetails from './Pages/Blog/ReactDetails/ReactDetails';
import CrudDetails from './Pages/Blog/CrudDetails/CrudDetails';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
