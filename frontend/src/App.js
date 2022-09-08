import "./App.css";
import Home from "./ComponentPages/Home";
import About from "./ComponentPages/About";
import Contact from "./ComponentPages/Contact";
import Navbar from "./Components/Navbar";
// import Router from "./Router";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Router /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route
            path="user"
            element={<h3>This is some info about the user</h3>}
          />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
