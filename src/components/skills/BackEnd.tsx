import React from "react";

const BackEnd: React.FC = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Development</h3>
      <div className="skills__box">
        <div className="skills__group">
          {/*  */}
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* Node logo img */}
            <img
              src={require("../logos/nodejs.png") as string}
              alt="Node logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Node</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          {/*  */}
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* Pythton logo img */}
            <img
              src={require("../logos/spring.png") as string}
              alt="Spring logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Spring</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* MySQL logo img */}
            <img
              src={require("../logos/kafka.png") as string}
              alt="Kafka logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Kafka</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* AWS logo img */}
            <img
              src={require("../logos/aws.png") as string}
              alt="AWS logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">AWS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* PHP  */}
            <img
              src={require("../logos/redis.png") as string}
              alt="Redis logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Redis</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>
        {/* ====== */}
        <div className="skills__group">
          {/*  */}
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* PostgreSQL logo img */}
            <img
              src={require("../logos/postgresql.png") as string}
              alt="PostgreSQL logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">PostgreSQL</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          {/*  */}
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* MongoDB logo img */}
            <img
              src={require("../logos/mongodb.png") as string}
              alt="MongoDB logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* Vercel logo img */}
            <img
              src={require("../logos/vercel.png") as string}
              alt="Vercel logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Vercel</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* Postman logo img */}
            <img
              src={require("../logos/postman.png") as string}
              alt="Postman logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Postman</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* Docker logo img */}
            <img
              src={require("../logos/docker.png") as string}
              alt="Docker logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackEnd;
