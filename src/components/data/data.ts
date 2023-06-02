// This file contains the data for the projects and navbarbar items.
import { TypeMyData, TypeNavbar } from "./Models";
import YelpCamp from "../assets/yelpcamp.png";
import Pamfg from "../assets/pamfg.png";

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
