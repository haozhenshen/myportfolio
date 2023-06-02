import { FC } from "react";
import { Fade, Rotate } from "react-awesome-reveal";
import { Link } from "react-scroll";
const Data: FC = () => {
  return (
    <div className="home__data">
      <Fade delay={300} triggerOnce>
        <h1 className="home__title">
          Haozhen Shen    
        </h1>
      </Fade>
      <Fade delay={300} triggerOnce>
        <h3 className="home__subtitle">Software Engineer, Data Scientist</h3>
      </Fade>
      <Fade delay={600} triggerOnce>
        <p className="home__description">
        Passionate software engineer and data scientist, leveraging technology to drive innovation and solve complex problems.
        </p>
      </Fade>
      <Fade delay={900} triggerOnce>
        <Link to="contact" className="button button--flex">
          Contact Me
          {"  "}
          <svg
            className="button__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
           
            fill="none"
          >
            <polyline fill="var(--container-color)" points="21.5 2.5 2.5 10.2 9.6 14.4 13.8 21.5 21.5 2.5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
            
          </svg>
        </Link>
      </Fade>
    </div>
  );
};

export default Data;
