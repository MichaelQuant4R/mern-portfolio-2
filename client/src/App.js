import Navbar from './main/components/Navbar';
import NavbarAdmin from "./admin/components/NavbarAdmin";
// import "./main/css/global.css";
import {BrowserRouter} from "react-router-dom";
import useLocalStorage from "use-local-storage";
import {useSelector} from "react-redux";
import './App.css';

import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import { useCallback } from "react";

function App() {

  const defaultDark = window.matchMedia(`(prefers-color-scheme: dark)`).matches;
  const [theme, setTheme] = useLocalStorage("theme", defaultDark? "dark": "light");

  const auth = useSelector((state) => state.auth.currentUser);
  const admin = useSelector((state) => state.admin.currentAdmin);

  // console.log("AUTH APP.JS", auth);
  // console.log("ADMIN APP.JS", admin);

  // console.log("DEFAULT DARK", defaultDark);

  const switchTheme = () => {
    const newTheme = theme === "light"? "dark": "light";
    console.log("SWITCH THEME");
    console.log(newTheme);
    setTheme(newTheme);
  }

  return (
    <div id="App" data-theme={theme}>

      <BrowserRouter>

      {admin !== null ?
      
    (<>
    <NavbarAdmin admin={admin}/>
    
    </>):
    (<>
    
    <Navbar auth={auth} switchTheme = {switchTheme} theme={theme}/>
    
    </>)}
      </BrowserRouter>
    
    </div>
  );
}

export default App;
