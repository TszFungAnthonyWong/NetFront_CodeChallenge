import React, { Component } from "react";
import imgSvg from "../../../assets/image-placement.svg";
import gold_starSvg from "../../../assets/single-star-gold.svg"
import gery_starSvg from "../../../assets/single-star-grey.svg"
import "./cards.scss";


class Card extends Component {
    render() {
        let starNum = this.props.data.rating | 0;
        let rating = this.props.data.rating
        let goldStar = [];
        let geryStar = [];
        let counter;
        if (this.props.data.rating) {
            for (counter = 0; counter < starNum; counter++) {
                goldStar.push(<img className="starImg" src={gold_starSvg} alt="icon" key={counter + "gold"} />)
            }

            for (counter = 0; counter < 5 - starNum; counter++) {
                geryStar.push(<img className="starImg" src={gery_starSvg} alt="icon" key={counter + "gery"} />)
            }

        } else {
            rating = "No review";
            for (counter = 0; counter < 5; counter++) {
                geryStar.push(<img className="starImg" src={gery_starSvg} alt="icon" key={counter + "gery"} />)
            }
        }

        let publish = this.props.data.published === true ? <div className="publish"><p>Published</p></div> : <div className="publish" style={{ backgroundColor: '#E25169'}}><p>Unpublished</p></div>;

        return (
            <div className="card">
                <img className="cardImg" src={imgSvg} alt="icon" />
                {publish}
                <div className="card-content">
                    <h3>{this.props.data.title}</h3>
                    <p className="user">by {this.props.data.user}</p>
                    <div className="rating">
                        {goldStar}
                        {geryStar}
                        <p> {rating} </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card