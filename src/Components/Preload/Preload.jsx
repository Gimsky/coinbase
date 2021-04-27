import React, { Component } from "react";
import Policy from "../Policy/Policy";
import styleLogo from "./logo.module.css"
import styleAnimation from "./../../styles/animation.module.css"
import styleModal from './../../styles/modal.module.css'

export default class Preload extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showPreloader: true,
        };
    }

    render() {
        const style = {
            display: "block",
            height: "100%",
        };

        const showPreloader = this.state.showPreloader;

        return (
            <div style={style}>
                {showPreloader 
                    ? <div className={`${styleModal['modal__inner']}  ${styleModal['modal__inner--animated']}  ${styleAnimation.animated}`} id="inner-0" style={style}>
                        <div className={styleLogo.logo}>
                            <svg width="180" height="30" viewBox="0 0 180 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.3215 8.39062C29.7907 8.39062 24.6665 13.0312 24.6665 19.2188C24.6665 25.4062 29.64 30 36.3215 30C43.0031 30 48.077 25.3125 48.077 19.1719C48.077 13.0313 43.1035 8.39062 36.3215 8.39062ZM36.3718 25.5469C32.6542 25.5469 29.9414 22.8281 29.9414 19.2188C29.9414 15.5625 32.604 12.8438 36.3718 12.8438C40.1395 12.8438 42.8524 15.5625 42.8524 19.2188C42.8524 22.875 40.0893 25.5469 36.3718 25.5469ZM49.4837 13.0781H52.7491V29.5781H57.9235V8.76562H49.4837V13.0781ZM11.6048 12.8438C14.3176 12.8438 16.4778 14.3906 17.3318 16.7344H22.8077C21.803 11.7188 17.3821 8.34375 11.655 8.34375C5.1242 8.39062 0 12.9844 0 19.2188C0 25.4531 4.97349 30 11.655 30C17.2816 30 21.803 26.625 22.8077 21.5625H17.3318C16.528 23.9062 14.3678 25.5 11.655 25.5C7.88725 25.5 5.22467 22.7812 5.22467 19.1719C5.22467 15.5625 7.83701 12.8438 11.6048 12.8438ZM148.2 17.2031L144.382 16.6875C142.573 16.4531 141.267 15.8906 141.267 14.5312C141.267 13.0781 142.975 12.375 145.236 12.375C147.748 12.375 149.355 13.3594 149.707 15.0469H154.731C154.178 10.875 150.712 8.39062 145.387 8.39062C139.911 8.39062 136.243 11.0156 136.243 14.7188C136.243 18.2812 138.605 20.2969 143.427 20.9531L147.245 21.4688C149.104 21.7031 150.159 22.4062 150.159 23.6719C150.159 25.3125 148.351 26.0156 145.839 26.0156C142.774 26.0156 141.016 24.8438 140.765 23.0625H135.641C136.143 27.1406 139.559 30 145.788 30C151.465 30 155.233 27.5625 155.233 23.4375C155.233 19.7344 152.47 17.8125 148.2 17.2031ZM55.3112 0.1875C53.4022 0.1875 51.9955 1.45313 51.9955 3.23438C51.9955 5.01562 53.4022 6.28125 55.3112 6.28125C57.2202 6.28125 58.6269 5.01562 58.6269 3.23438C58.6269 1.45313 57.2202 0.1875 55.3112 0.1875ZM131.571 15.8906C131.571 11.3906 128.607 8.34375 122.378 8.34375C116.5 8.34375 113.184 11.1094 112.531 15.375H117.706C117.957 13.7344 119.364 12.375 122.277 12.375C124.94 12.375 126.196 13.4531 126.196 14.8125C126.196 16.5469 123.835 16.9688 120.871 17.25C116.902 17.6719 111.929 18.9375 111.929 23.7656C111.929 27.5156 114.893 29.9062 119.665 29.9062C123.383 29.9062 125.744 28.4531 126.899 26.1562C127.05 28.2188 128.708 29.5312 131.019 29.5312H134.033V25.3125H131.471L131.571 15.8906ZM126.447 21.1406C126.447 23.9062 123.835 25.9688 120.67 25.9688C118.711 25.9688 117.053 25.2188 117.053 23.5781C117.053 21.5156 119.715 20.9531 122.127 20.7188C124.488 20.5312 125.744 20.0156 126.397 19.125V21.1406H126.447ZM98.8669 8.39062C95.9531 8.39062 93.5417 9.51562 91.8337 11.3906V0H86.6592V29.5781H91.7834V26.8594C93.4915 28.8281 96.0033 30 98.9171 30C105.147 30 109.869 25.4062 109.869 19.2188C109.869 13.0312 105.046 8.39062 98.8669 8.39062ZM98.1133 25.5469C94.3958 25.5469 91.683 22.8281 91.683 19.2188C91.683 15.6094 94.446 12.8438 98.1636 12.8438C101.931 12.8438 104.594 15.5625 104.594 19.2188C104.544 22.8281 101.831 25.5469 98.1133 25.5469ZM74.2004 8.39062C70.8345 8.39062 68.6241 9.65625 67.3179 11.4844V8.76562H62.1435V29.5781H67.3179V18.2812C67.3179 15.0938 69.4781 12.8438 72.6933 12.8438C75.6573 12.8438 77.5663 14.8125 77.5663 17.6719V29.5781H82.7407V17.2969C82.791 12.0938 79.8772 8.39062 74.2004 8.39062ZM180 18.5156C180 12.5625 175.328 8.39062 169.048 8.39062C162.367 8.39062 157.494 13.0781 157.494 19.2188C157.494 25.6875 162.718 30 169.149 30C174.574 30 178.794 27 179.9 22.7812H174.474C173.67 24.6562 171.811 25.6875 169.249 25.6875C165.934 25.6875 163.422 23.7656 162.819 20.3906H180V18.5156ZM163.12 16.9219C163.924 14.0156 166.285 12.6094 168.948 12.6094C171.912 12.6094 174.122 14.1562 174.675 16.9219H163.12Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                    :
                    <Policy></Policy>
                }
            </div>
        );
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState(state => ({
                showPreloader: false
            }));
        }, 6000);
    }

}