// This file contains the data for the projects and navbarbar items.
import { TypeMyData, TypeNavbar } from "./Models";
import YelpCamp from "../assets/yelpcamp.png";
import Pamfg from "../assets/pamfg.png";
import vaebm_img from "../assets/vaebm.png";
import vaebm_paper from "../assets/vaebm.pdf";
import ansn_img from "../assets/ansn.png";
import ansn_paper from "../assets/ansn.pdf";

export const data: TypeMyData[] = [
  {
    id: 1,
    title: "YelpCamp",
    img_url: `${YelpCamp}`,
    link: "https://yelpcamp-by-hzs.herokuapp.com/",
    gitHub: "https://github.com/haozhenshen/YelpCamp",
  },
  {
    id: 2,
    title: "Principal Agent Mean Field Game",
    img_url: `${Pamfg}`,
    link: "https://github.com/haozhenshen/pa-mfg",
    gitHub: "https://github.com/haozhenshen/pa-mfg",
  },
  {
    id: 3,
    title: "Variational Autoencoder + Energy Based Model",
    img_url: `${vaebm_img}`,
    link: vaebm_paper,
    gitHub: "https://github.com/haozhenshen/vaebm",
  },
  {
    id: 4,
    title: "Adaptive Noise Score Networks",
    img_url: `${ansn_img}`,
    link: ansn_paper,
    gitHub: "https://github.com/haozhenshen/ansn",
  }
];

export const listNavBar: TypeNavbar[] = [
  {
    id: 1,
    item: "Home",
    icon: "uil uil-home",
    href: "home",
  },
  {
    id: 2,
    item: "About",
    icon: "uil uil-user",
    href: "about",
  },
  {
    id: 3,
    item: "Skills",
    icon: "uil uil-file-alt",
    href: "skills",
  },
  {
    id: 4,
    item: "Qualifications",
    icon: "uil uil-graduation-cap",
    href: "qualification",
  },
  {
    id: 5,
    item: "Projects",
    icon: "uil uil-briefcase-alt",
    href: "projects",
  },
  {
    id: 6,
    item: "Contact",
    icon: "uil uil-envelope",
    href: "contact",
  },
];
