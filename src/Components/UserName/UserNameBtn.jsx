import React from "react";
import { useHistory } from "react-router-dom";
import styleBtn from './../../styles/button.module.css'
import styleAnimation from './../../styles/animation.module.css'

const UserNameBtn = (props) => {

   let history = useHistory();
   const handleClick = () => {
      history.push("/privacy");
   }
   return (
      <button disabled={!props.name}
         className={`
            ${styleBtn.button} 
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
export default UserNameBtn;