import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/5306-rocket-funk.json";
import "../App.css";
class UncontrolledLottie extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
      //   rendererSettings: {
      //     preserveAspectRatio: "xMidYMid slice"
      //   }
    };

    return (
      <div className="Uncontrolled">
        <h1>Uncontrolled Lottie</h1>
        <p>Animación Libre que se autoejecuta</p>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    );
  }
}

export default UncontrolledLottie;
