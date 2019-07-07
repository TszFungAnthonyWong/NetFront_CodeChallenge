import React, { Component } from "react";
import PropTypes from 'prop-types';
import Card from "./cards/cards";
import "./cardList.scss";

class CardList extends Component {
    render() {
        let cardList = Object.keys(this.props.data.cards).map((key) => {
            return <Card data={this.props.data.cards[key]} key={key} />
        })
        return (
            <section>
                <div className="card-wrapper">
                    {cardList}
                </div>
            </section>

        )
    }
}

CardList.propTypes = {
    data: PropTypes.object
};

export default CardList