import React, { Component } from 'react';
import PolicyBtn from './PolicyBtn'
import styleAnimation from "./../../styles/animation.module.css"
import styleModal from './../../styles/modal.module.css'
import styleCheckbox from './../../styles/checkbox.module.css'




export default class Policy extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            policy: false
        };
    }

    toggleCheckboxChange = () => {
        this.setState(({ policy }) => ({
            policy: !policy,
          }
        ));
      }
      
    render() {
        const style = {
            display: "block",
            height: "100%",
        };

        return(
            <div className={`${styleModal['modal__inner']} `} id="inner-1" style={style}>
                <div className={styleModal.heading}>Legal</div>
                <div className={styleModal.subheading}>Please review the Coinbase Wallet Terms of Service and Privacy Policy.</div>
                <div className={styleModal.text}>
                    <p>
                        Welcome to Coinbase! This is a User Agreement between you (also referred to herein as “Client,” “User,” or customer) and Coinbase Inc. ("Coinbase"). This User Agreement ("Agreement") governs your use of the services provided by Coinbase described below ("Coinbase Services" or "Services"). By signing up to use an account through coinbase.com, pro.coinbase.com, APIs, or the Coinbase mobile application (collectively the "Coinbase Site"), you agree that you have read, understand, and accept financial circumstances and risk tolerance. You should consult your legal or tax professional regarding your specific situation.
                </p>
                    <p>
                        3.5. Debts. In the event that there are outstanding amounts owed to us hereunder, including in your Coinbase Account, Coinbase reserves the right to debit your Coinbase Pro Account accordingly and/or to withhold amounts from funds you may transfer from your Coinbase Pro Account to your Coinbase Account.
                </p>
                </div>
                {/* <div className="list__checkbox animated fadeInUp delay2"> */}
                <div className={`${styleCheckbox.list__checkbox} ${styleAnimation.animated}`}>
                    <input onChange={this.toggleCheckboxChange} type="checkbox" id="accept" name="accept" value="accept" />
                    <label htmlFor="accept">I agree with the policy and TOS</label>
                </div>
                <PolicyBtn policy={this.state.policy} ></PolicyBtn>
            </div>
        )
    }
}