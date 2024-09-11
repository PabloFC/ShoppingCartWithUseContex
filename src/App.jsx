import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Products />
      <Footer />
    </>
  );
}

export default App;
