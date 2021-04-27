import React from "react";
import img from './../../img/img-inner-2.png'
import GetStartedBtn from "./GetStartedBtn";
import Dots from "../Dots/Dots";
import styleModal from './../../styles/modal.module.css'
  
function GetStarted() {
  return (
    <div className={styleModal.modal__inner} id="inner-2" >
        <div className={styleModal.content}>
            <div className="content__block">
                <img src={img} className={styleModal.image} alt=""/>
                <div className={`${styleModal.heading} ${styleModal['heading--center']}`}>All your digital assets in one place</div>
                <div className={`${styleModal.subheading} ${styleModal['subheading--center']}`}>
                    Take control of your tokens and <br/>
                    collectibles by storing them on <br/>
                    your own device
                </div>
            </div>
            <div className="content__footer">
                <Dots activeDot={1}/>
                <GetStartedBtn/>
            </div>
        </div>
    </div>
  );
}

export default GetStarted;
