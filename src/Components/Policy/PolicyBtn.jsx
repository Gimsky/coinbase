import React from "react";
import { useHistory } from "react-router-dom";
import styleBtn from './../../styles/button.module.css'
import styleAnimation from './../../styles/animation.module.css'

const GetStartedBtn = (props) => {

   let history = useHistory();
   const handleClick = () => {
      history.push("/get-started");
   }
   return (
      <button 
         disabled={!props.policy} 
         className={`
            ${styleBtn.button} 
            ${styleBtn['button--next']}
            ${styleAnimation.animated}
            ${styleAnimation.fadeInUp}
            ${styleAnimation.delay1}
         `} 
         type="button" 
         onClick={handleClick}>
         Accept
      </button>
   );
}
export default GetStartedBtn;