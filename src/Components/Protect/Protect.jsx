import React, { Component } from "react";
import img from './../../img/img-inner-5.png'
import Dots from "../Dots/Dots";
import ProtectBtn from "./ProtectBtn";
import styleModal from './../../styles/modal.module.css'



export default class Protect extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            createPin: true,
            checked: false
        };
    }

    handleCheckbox= (e) => {
        let pin;
        
        if(e.target.id === "protect1" ) {
            pin = true;
            this.setState({
                checked: true,
            })
        } else if (e.target.id === "protect2") {
            pin = false;
            this.setState({
                checked: true,
            })
        } else {
            this.setState({
                checked: false,
            })
        }

        this.setState({
            createPin: pin
        })
     }

     componentDidMount =  () => {
        console.log(this.state.pin)
     }

    render() {
        const style = {
            marginTop: "40px",
        };

        return (
            <div className={styleModal.modal__inner} id="inner-5">
                <div className={styleModal.content}>
                    <div className="content__block">
                        <img src={img} className={` ${styleModal.image}  ${styleModal['image--center']} `} alt=""/>
                        <div className={`${styleModal.heading} ${styleModal['heading--small-gap']}`}>Protect your wallet</div>
                        <div className={`${styleModal.subheading} ${styleModal['subheading--small-gap']}`}>
                            Add an extra layer of security to keep your crypto safe
                        </div>
                        <div className={styleModal['radio-blocks}']}>
                            <input id="protect1" name="protect" type="radio" className={styleModal["radio-block__input"]}  onChange={this.handleCheckbox}/>
                            <label htmlFor="protect1" className={` ${styleModal['radio-block']} ${styleModal['radio-block--iconed']}  ${styleModal['radio-block--pin']} `}>
                                <span className={styleModal['radio-block__heading']}>Create PIN <i>(Recommended)</i></span>
                            </label>
        
                            <input id="protect2" name="protect" type="radio" className={styleModal["radio-block__input"]} onChange={this.handleCheckbox}/>
                            <label htmlFor="protect2" 
                                className={` 
                                    ${styleModal['radio-block']} 
                                    ${styleModal['radio-block--iconed']}
                                    ${styleModal['radio-block--error']} 
                                `} 
                                style={style}>
                                <span className={styleModal['radio-block__heading']}>I don’t want <i>(I accept all the risks)</i></span>
                            </label>
                        </div>
                    </div>
                    <div className="content__footer">
                        <Dots activeDot={4}/>
                        <ProtectBtn checked={this.state.checked} pin={this.state.createPin}/>
                    </div>
                </div>
            </div>
        );
    }

}

