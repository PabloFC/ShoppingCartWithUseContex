import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Products />} />
      </Routes>
      <Products />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
