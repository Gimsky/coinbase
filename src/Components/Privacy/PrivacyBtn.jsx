import React from "react";
import { useHistory } from "react-router-dom";
import styleBtn from './../../styles/button.module.css'
import styleAnimation from './../../styles/animation.module.css'


const PrivacyBtn = (props) => {

   let history = useHistory();
   const handleClick = () => {
      history.push("/protect");
   }
   return (
      <button
         className={`
            ${styleBtn.button} 
            ${styleBtn['button--next']}
            ${styleAnimation.animated}
            ${styleAnimation.fadeInUp}
            ${styleAnimation.delay1}
         `} 
         type="button" 
         onClick={handleClick}>
         Next
      </button>
   );
}
export default PrivacyBtn;