import React, { Component } from "react";
import img from './../../../img/img-inner-9.png';
import SignInBtn from "./SignInBtn";
import styleModal from './../../../styles/modal.module.css'

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
        };
    }
    
    handleInput= (e) => {
        let prefix = '@';
        const input = e.target.value
        let name = e.target.value = prefix + input.substr(prefix.length)
        this.setState({
            name: name
        })
     }

    render() {
        return (
            <div class={styleModal.modal__inner} id="inner-8">
                <div class={styleModal.content}>
                    <div class={styleModal.content__block}>
                        <div class={`
                            ${styleModal.heading} 
                            ${styleModal['heading--without-gap']}
                        `}>Sign in with a recovery phrase</div>
                        <div class={`
                            ${styleModal.subheading} 
                            ${styleModal['subheading--without-gap']}
                        `}>
                            This is a 12 or 24 word phrase you were given when you created your wallet.
                        </div>
                        {/* <!-- textarea__wrapper--error класс ошибы --> */}
                        <div class={`
                            ${styleModal.textarea__wrapper}
                            ${styleModal['textarea__wrapper--error']}
                        `}>
                            <textarea id="textarea" class={styleModal.textarea} placeholder="Enter your phrase here"></textarea>
                        </div>
                        <img src={img} class={`
                            ${styleModal.image}
                            ${styleModal['image--middle']}
                        `} alt=""/>
                    </div>
                    <div class="content__footer">
                        <SignInBtn/>
                    </div>
                </div>
            </div>
        );
    }

}

