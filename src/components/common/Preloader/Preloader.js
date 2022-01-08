import React from "react";
 import preloader from "../../../asseds/images/Spin-1s-200px (3).svg";
import style from './Preloader.module.css'

let Preloader = (props) => {
    return <div className={style.imagine}>
        <img  src={preloader}/>
    </div>
}

export default Preloader;