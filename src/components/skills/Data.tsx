import React from "react";

const Data: React.FC = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Data Engineering</h3>
      <div className="skills__box">
        <div className="skills__group">
          {/*  */}
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* Node logo img */}
            <img
              src={require("../logos/python.png") as string}
              alt="Python logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          {/*  */}
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* Pythton logo img */}
            <img
              src={require("../logos/spark.png") as string}
              alt="Spark logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Spark</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* MySQL logo img */}
            <img
              src={require("../logos/airflow.png") as string}
              alt="Airflow logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Airflow</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* AWS logo img */}
            <img
              src={require("../logos/lambda.png") as string}
              alt="Lambda logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Lambda</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* Databricks logo img */}
            <img
              src={require("../logos/databricks.png") as string}
              alt="Databricks logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Databricks</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

        </div>
       

        <div className="skills__group">
          {/*  */}
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* Kedro logo img */}
            <img
              src={require("../logos/kedro.png") as string}
              alt="PostgreSQL logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Kedro</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          {/*  */}
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* MongoDB logo img */}
            <img
              src={require("../logos/snowflake.png") as string}
              alt="Snowflake logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Snowflake</h3>
              <span className="skills__level">Intemediate</span>
            </div>
          </div>

          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* PHP  */}
            <img
              src={require("../logos/nifi.png") as string}
              alt="Nifi logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">nifi</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
         
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* AWS logo img */}
            <img
              src={require("../logos/grafana.png") as string}
              alt="Grafana logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Grafana</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Data;
