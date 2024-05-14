import React from "react";
import {useEffect } from "react";
import {useState} from "react";
import { AppHeader } from "../components/AppHeader";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";


const Welcome = () => {
const [name,setName]=useState("") 
const [phone,setPhone]=useState("")

  useEffect(()=>{
   console.log("ИМЯ",name);
   console.log("Номер телефона",phone);
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
            <AppInput inputLabel="Ваше имя" inputPlaceholder="Ваш ответ" />
            <AppInput inputLabel="Ваш номер" inputPlaceholder="+998 9" />
            <AppButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
