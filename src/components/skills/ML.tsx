import React from "react";

const ML: React.FC = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Machine Learning</h3>
      <div className="skills__box">
        <div className="skills__group">
          {/*  */}
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* Node logo img */}
            <img
              src={require("../logos/pytorch.png") as string}
              alt="Pytorch logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Pytorch</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          {/*  */}
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* Pythton logo img */}
            <img
              src={require("../logos/tf.png") as string}
              alt="Tensorflow logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Tensorflow</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* MySQL logo img */}
            <img
              src={require("../logos/jax.png") as string}
              alt="Jax logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Jax</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* AWS logo img */}
            <img
              src={require("../logos/lightning.png") as string}
              alt="PyTorch Lightning logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">PyTorch Lightning</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* PHP  */}
            <img
              src={require("../logos/keras.png") as string}
              alt="Keras logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Keras</h3>
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
              src={require("../logos/wandb.png") as string}
              alt="Weights and Biases logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Weights&Biases</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          {/*  */}
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* MongoDB logo img */}
            <img
              src={require("../logos/mlflow.png") as string}
              alt="MLflow logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">MLflow</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* Firebase logo img */}
            <img
              src={require("../logos/lgbm.png") as string}
              alt="LightGBM logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">LightGBM</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* Postman logo img */}
            <img
              src={require("../logos/huggingface.png") as string}
              alt="Hugging Face logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Hugging Face</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            {/* Docker logo img */}
            <img
              src={require("../logos/optuna.png") as string}
              alt="Optuna logo"
              className="skills__logo"
            />

            <div>
              <h3 className="skills__name">Optuna</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ML;
