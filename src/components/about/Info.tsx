import React from "react";

const Info: React.FC = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="fa fa-trophy about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 Years of Industry Experience </span>
      </div>
      <div className="about__box">
        <i className="fa fa-briefcase about__icon"></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">Master's at University of Toronto</span>
      </div>
      <div className="about__box">
        <i className="fa fa-headphones about__icon"></i>
        <h3 className="about__title">Speciaties</h3>
        <span className="about__subtitle">Software Engineering, Machine Learning</span>
      </div>
    </div>
  );
};

export default Info;
