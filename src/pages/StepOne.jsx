import React from "react";
import { AppHeaderSt1 } from "../components/AppHeaderSt1";
import { AppButtonSt1 } from "../components/AppButtonSt1";
import { AppInputSt1 } from "../components/AppInputSt1";

const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
           <AppHeaderSt1/>
            <AppInputSt1/> 
             <AppButtonSt1/>  
          </div>
        </div>
      </div> 
    </div>
  );
};

export default StepOne;
