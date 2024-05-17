import React, { useEffect } from "react";
import { useState } from "react";
import { AppHeader } from "../components/AppHeader";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";


const Welcome = () => {
  const regex = /^[A-Za-zА-Яа-я]+$/;
  const regexNum = /^\+?\d+$/  
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const [nameError, setNameError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)

  const [buttonError, setButtonError]= useState(true)

  const handleClick = () => {
    !regex.test(name) ? setNameError(true) : setNameError(false)
    !regexNum.test(phone) ? setPhoneError(true) : setPhoneError(false)
  }
  useEffect(()=> {
    if (!name || !phone) { 
       setButtonError(true)
    }else{
      setButtonError(false)
    }
  },[name,phone])

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <AppHeader
            headerText="Добро пожаловать в квиз от лучшего учебного центра"
            headerType="h1"
          />
          <form className="welcome__form">
            <AppInput
              hasError={nameError}
              inputLabel="Ваше имя"
              inputPlaceholder="Ваш ответ" 
              inputType="text"
              id="username" 
              errorText="Введите в правильном формате Имя"
              inputValue={name}
              inputChange={setName} 
             />
               
            <AppInput 
              hasError={phoneError}
              inputValue={phone}
              inputLabel="Ваш номер"
              inputPlaceholder="+998 9"  
              inputType="tel"
              id="phone" 
              errorText="Введите номер в правильном формате"
              inputChange={setPhone}
              />
            <AppButton
              isDisabled={buttonError}
              buttonType="button"
              buttonText="Далее"
              buttonClick={handleClick} 
              />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
