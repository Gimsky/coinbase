import React, { Component } from "react";
import img from './../../img/img-inner-3.png'
import Dots from "../Dots/Dots";
import UserNameBtn from './UserNameBtn';
import styleModal from './../../styles/modal.module.css'

export default class UserName extends Component {
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
            <div className={styleModal.modal__inner} id="inner-3">
                <div className={styleModal.content}>
                    <div className="content__block">
                        <img src={img}  className={styleModal.image} alt=""/>
                        <div className={`${styleModal.heading} ${styleModal['heading--small-gap']}`}>Pick your username</div>
                        <div className={`${styleModal.subheading} ${styleModal['subheading--small-gap']}`}>
                            This is how other Wallet users can find you and send you payments
                        </div>
                    </div>
                    <div className="content__footer">
                        <input type="text" className={styleModal.input} placeholder="@" onChange={this.handleInput}/>
                        <Dots activeDot={2}/>
                        <UserNameBtn name={this.state.name}/>
                    </div>
                </div>
            </div>
        );
    }

}

