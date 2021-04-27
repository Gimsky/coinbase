import React from "react";
import { useHistory } from "react-router-dom";
import styleBtn from './../../styles/button.module.css'
import styleAnimation from './../../styles/animation.module.css'

const ProtectBtn = (props) => {

   let history = useHistory();
   const handleClick = () => {
      if(props.pin) {
         history.push("/protect/pin");
      } else {
         history.push("/wallet");
      }
   }
   return (
      <button 
         disabled={!props.checked} 
         className={`
            ${styleBtn.button} 
            ${styleBtn['button--next']}
            ${styleAnimation.animated}
            ${styleAnimation.fadeInUp}
            ${styleAnimation.delay1}
         `} 
         type="button" 
         onClick={handleClick}>
         Continue
      </button>
   );
}
export default ProtectBtn;