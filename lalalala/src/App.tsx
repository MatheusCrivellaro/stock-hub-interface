import './App.css'
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import {Link, NavLink, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.tsx";
import StockPage from "./pages/StockPage/StockPage.tsx";

function App() {

  return (
      <>

        <nav className="navbar navbar-expand-lg container-nav bg-transparent fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">StockHub</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="">
                  <NavLink className={({isActive}) => (isActive ? "active-link" : "link")} to="/home">Home</NavLink>
                </li>
                <li className="">
                  <NavLink className={({isActive}) => (isActive ? "active-link" : "link")} to="/login">Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/stock" element={<StockPage/>}/>
        </Routes>

      </>
  )
}

export default App
