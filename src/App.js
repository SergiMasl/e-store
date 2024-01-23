import "./App.sass";
import Navbar from "./components/navbar/Navbar";
import Layout from "./Layout";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="log" element={<Layout />} />
          <Route path="home" element={<Home />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
