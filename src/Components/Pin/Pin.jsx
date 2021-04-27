import React, { Component } from "react";
import Dots from "../Dots/Dots";
import PinBtn from "./PinBtn";
import styleModal from './../../styles/modal.module.css'
import styleAnimation from './../../styles/animation.module.css'
import stylePin from './pin.module.css'


export default class Pin extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            pin: [],
        };
    }

    handlePinAdd = (e) => {
        let num = e.target.innerHTML;
        let pin = this.state.pin ?  this.state.pin : [];

        if(pin.length <= 5) {
            pin.push(num)
        } else {
            return false
        }

        console.log(pin)
        this.setState({
            pin: pin
        })
    }

    handlePinRemove = (e) => {
        let pin = this.state.pin;
        pin.pop()
        console.log(pin)
        this.setState({
            pin: pin
        })
    }

    

    render() {
      
        return (
            <div className={styleModal.modal__inner} id="inner-6" >
                <div className={styleModal.content}>
                    <div className={styleModal.content__block}>
                        <div className={` 
                            ${styleModal.heading}  
                            ${styleModal['heading--center']}
                            ${styleAnimation.animated}
                            ${styleAnimation.fadeInDown} 
                            ${styleAnimation.delay1} 
                        `}>
                        Create PIN</div>
                        <div className={stylePin.pin}>
                            <div className={`
                                ${stylePin.pin__dots}
                                ${styleAnimation.animated}
                                ${styleAnimation.fadeInDown}
                                ${styleAnimation.delay2}
                            `}>
                                {/* <span className="pin__dot pin__dot--active"></span> */}

                                {[...Array(6)].map((obj, i) =>{
                                    return <span className={` ${stylePin.pin__dot}  ${this.state.pin[i] ?  `${stylePin['pin__dot--active']}` : ""}`}></span>;
                                })}

                            </div>
                            <div className={stylePin.pin__nums}>
                                
                            {[...Array(9)].map( (obj, i) => {
                                return <span onClick={this.handlePinAdd} className={stylePin.pin__num}  key={i} >{i+1}</span>;
                            })}

                            <span  onClick={this.handlePinAdd} className={stylePin.pin__num}>0</span>
                            <span className={stylePin.pin__num} onClick={this.handlePinRemove}>{"<"}</span>
                         
                            </div>
                        </div>
                    </div>
                    <div className="content__footer">   
                        <Dots activeDot={5}/>
                        <PinBtn pin={this.state.pin} />
                    </div>
                </div>
            </div>
        );
    }

}

