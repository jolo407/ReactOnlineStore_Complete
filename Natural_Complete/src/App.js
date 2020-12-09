import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Catalog from './components/Catalog/Catalog';

import"bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";



function App() {
  return (
    <div className="App">

      <Navbar></Navbar>

      <h1>
        Natural Store
      </h1>
    <Catalog></Catalog>
      
      
     <Footer></Footer>
    </div>
  );
}

export default App;
