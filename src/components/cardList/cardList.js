import React, { Component } from "react";
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

export default CardList