import React from "react";

export const AppInput = ({inputLabel, inputPlaceholder}) => {
    return (
        <label className="input-wrapper" htmlFor="username">
              {inputLabel}
              <input
                required  
                type="text" 
                name="username"
                id="username"
                placeholder={inputPlaceholder}
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
        </label> 
    );  
};