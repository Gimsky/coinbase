import React, { Component } from 'react';
import styleDots from "./dots.module.css"
import styleAnimation from "./../../styles/animation.module.css"


export default class Dots extends Component {
    render() {
        const numbers = [1, 2, 3, 4, 5];

        const listItems = numbers.map((number) => {
            let classes = `${styleDots.dot}`;
            if (number === this.props.activeDot) {
                // eslint-disable-next-line no-useless-concat
                classes += ' ' +  `${styleDots['dot--active']}`;
            }
            return <li className={classes}></li>
        });

        return (
            <div className={`${styleDots.dots} ${styleAnimation.animated} ${styleAnimation.fadeInUp} ${styleAnimation.delay2}`}>
                {listItems}
            </div>
        )
    }
}