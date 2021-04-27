import React, { Component } from "react";
import img from './../../img/img-inner-4.png'
import Dots from "../Dots/Dots";
import PrivacyBtn from "./PrivacyBtn";
import styleModal from './../../styles/modal.module.css'



export default class Privacy extends Component {
    render() {
        const style = {
            marginTop: "0",
        };

        return (
            <div className={`${styleModal['modal__inner']} `} id="inner-4">
                <div className={`${styleModal['content']} `}>
                    <div className="content__block">
                        <img src={img} className={`${styleModal['image']} ${styleModal['image--center']}`} alt=""/>
                        <div className={`${styleModal.heading} ${styleModal['heading--small-gap']}`}>Set your privacy prefernces</div>
                        <div className={`${styleModal.subheading} ${styleModal['subheading--small-gap']}`} style={style}>
                            You can always change this later in Settings
                        </div>
                        <div className={styleModal['radio-blocks}']}>
                            <input id="privacy1" name="privacy" type="radio" className={styleModal["radio-block__input"]} checked/>
                            <label for="privacy1" className={styleModal["radio-block"]}>
                                <span className={styleModal['radio-block__heading']}>Public <i>(Recommended)</i></span>
                                <span className={styleModal['radio-block__text']}>Other Wallet users can search for my username and send me crypto</span>
                            </label>

                            <input id="privacy2" name="privacy" type="radio" className={styleModal["radio-block__input"]}/>
                            <label for="privacy2" className={styleModal["radio-block"]}>
                                <span className={styleModal['radio-block__heading']}>Private <i>(Top security level)</i></span>
                                <span className={styleModal['radio-block__text']}>Other Wallet users cannot search for my username</span>
                            </label>
                        </div>
                    </div>
                    <div className="content__footer">
                        <Dots activeDot={3}/>
                        <PrivacyBtn/>
                    </div>
                </div>
            </div>
        );
    }

}

