import './App.css'
import {Link, NavLink, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import StockPage from "./pages/StockPage/StockPage.tsx";

function App() {

  return (
      <>
          <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                  <Link className="navbar-brand" to="/">
                      <img src="/logo_autodealer.jpg" alt="Logo" width="30" height="24"
                           className="d-inline-block align-text-top"/>
                      Bootstrap
                  </Link>
                  <ul className="navbar-nav">
                      <li className="">
                          <NavLink className={({isActive}) => (isActive ? "active-link" : "link")}
                                   to="/">Home</NavLink>
                      </li>
                      <li className="">
                          <NavLink className={({isActive}) => (isActive ? "active-link" : "link")}
                                   to="/login">Login</NavLink>
                      </li>
                  </ul>
              </div>
          </nav>

          <Routes>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/stock" element={<StockPage/>}/>
          </Routes>

      </>
  )
}

export default App
