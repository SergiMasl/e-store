import "./App.sass";
import Navbar from "./components/navbar/Navbar";
import Layout from "./Layout";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contect/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="e-store/log" element={<Layout />} />
            <Route path="e-store/home" element={<Home />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
