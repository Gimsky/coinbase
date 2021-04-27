import React, { Component } from "react";
import img from './../../img/img-inner-7.png'
import RestoreBtn from './RestoreBtn'
import styleModal from './../../styles/modal.module.css'

export default class Restore extends Component {
   
    render() {
        return (
            <div class={styleModal.modal__inner} id="inner-7">
                <div class={styleModal.content}>
                    <div class="content__block">
                        <img src={img} class={styleModal.image} alt=""/>
                        <div class={`
                            ${styleModal.heading} 
                            ${styleModal['heading--small-gap']}
                        `}>Last step is:<br/>Restore wallet</div>
                        <div class={`
                            ${styleModal.subheading} 
                            ${styleModal['subheading--small-gap']}
                        `}>
                            Restore your wallet with 12 or 24 word <br/>
                            recovery phrase
                        </div>
                    </div>
                    <div class="content__footer">
                        <RestoreBtn/>                        
                    </div>
                </div>
            </div>
        );
    }

}

