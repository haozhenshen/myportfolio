import { FC, useState, useEffect, useContext } from "react";
import { listNavBar } from "../data/data";
import { Link } from "react-scroll";
import contextDarkMod from "../context/contextDarkMod";
import "./Header.css";

import FormControlLabel from '@mui/material/FormControlLabel';

import MaterialUISwitch from "./partials";

import FormGroup from '@mui/material/FormGroup';


const Header: FC = () => {
  /* ========== Toogle Menu ==========  */
  const [Toogle, setToggle] = useState<boolean>(false);
  /* ========== Grab values from context API ==========  */
  const { IsdarkMode, toggleIsDarkMode } = useContext(contextDarkMod);

  /* ========== Change Background Navbar ==========  */
  // When the scroll is higher than 200 viewport height, add the scroll-header class to tag with the header tag
  const headerListener = (): void => {
    const headerPosition = document.querySelector(".header") as HTMLElement;
    if (window.scrollY >= 80) headerPosition.classList.add("scroll-header");
    else headerPosition.classList.remove("scroll-header");
  };

  // I am calling the function headerListener in here.
  useEffect((): void => {
    window.addEventListener("scroll", headerListener);
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
    
        <a href="/my-portfolio/" className="nav__logo">
          Haozhen Shen
        </a>
        <FormGroup>
          <FormControlLabel
            control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
            label=""
            onChange={toggleIsDarkMode}
          />
          
        </FormGroup>
        <div className={Toogle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {listNavBar.map(({ id, item, icon, href }) => {
              return (
                <li className="nav__item" key={id}>
                  <Link
                    className="nav__link"
                    to={`${href}`}
                    spy={true}
                    smooth={true}
                    duration={50}
                  >
                    <i className={`${icon} nav__icon`}></i>
                    {item}
                  </Link>
                </li>
              );
            })}
            
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(!Toogle)}
          ></i>
          <div></div>
        </div>
      
        
        <div className="nav__toggle" onClick={() => setToggle(!Toogle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};


export default Header;
