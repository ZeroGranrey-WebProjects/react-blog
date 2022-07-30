import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <div className="content">
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route index path="/create" element={<Create/>}/>
        <Route index path="/blog/:id" element={<BlogDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  </div>
  </Router>
  );
}

export default App;
