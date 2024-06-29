import './App.css'
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import StockPage from "./pages/StockPage/StockPage.tsx";
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.tsx";

function App() {

  return (
      <>
          <NavBar />
          <Routes>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/stock" element={<StockPage/>}/>
          </Routes>

      </>
  )
}

export default App
