import React from "react";
import { useHistory } from "react-router-dom";

const GetStartedBtn = (props) => {

   let history = useHistory();
   const handleClick = () => {
      history.push("/get-started");
   }
   return (
      <button disabled={!props.policy} className="button button--next animated fadeInUp delay1" type="button" onClick={handleClick}>
         Accept
      </button>
   );
}
export default GetStartedBtn;