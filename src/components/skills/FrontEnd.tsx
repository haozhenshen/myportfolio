import React from "react";

const FrontEnd: React.FC = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Development </h3>
      <div className="skills__box">
        <div className="skills__group">
          {/*  */}
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* HTML logo img */}
            <img
              src={require("../logos/html.png") as string}
              alt="HTML logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* Javascript logo image */}
            <img
              src={require("../logos/javascript.png") as string}
              alt="Javascript logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Javascript</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          {/*  */}
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* Typescript logo image */}
            <img
              src={require("../logos/typescript.png") as string}
              alt="Typescript logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Typescript </h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          {/*  */}
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* React logo image */}
            <img
              src={require("../logos/react.png") as string}
              alt="React logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>


          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* Figma */}
            <img
              src={require("../logos/figma.png") as string}
              alt="Figma logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* booststrap logo image */}

            <img
              src={require("../logos/bootstrap.png") as string}
              className="skills__logo"
              alt="Bootstrap logo"
            />

            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* CSS logo image */}
            <img
              src={require("../logos/css3.png") as string}
              alt="CSS logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>


          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* Git logo image */}
            <img
              src={require("../logos/material_UI.png") as string}
              alt="Material UI logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">MaterialUI</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>


          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* WordPress logo image */}
            <img
              src={require("../logos/next.png") as string}
              alt="next logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Next.js </h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* Redux logo image */}
            <img
              src={require("../logos/redux.png") as string}
              alt="Redux logo"
              className="skills__logo"
            />
            <div>
              <h3 className="skills__name">Redux</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEnd;
