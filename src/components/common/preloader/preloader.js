import preloaderImage from "../../../assets/images/Spinner-1s-200px.svg";
import React from "react";
import s from './preloader.module.css'

let Preloader = () =>{
    return < img src={preloaderImage} className={s.image}/>
}

export default Preloader;