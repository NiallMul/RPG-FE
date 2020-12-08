import React, {Component} from 'react';
import Tabs from "../tabs/Tabs";
import CardDetails from "./CardDetails";

class ClassCard extends Component {
    generateCardDetails = () => {
        let formattedCards = [];
        fetch('http://localhost:8080/race')
            .then(response => response.json()).then(data => {
                if (data) {
                    for (let card of data) {
                        formattedCards.push(this.createCardComponent(card));
                    }
                }
            }
        ).catch(error => console.log(error));
    }

    createCardComponent = (cardInformation) => {
        return (<CardDetails label={cardInformation.raceName} description={cardInformation.physicalDesc}/>);
    }

    render() {
        return (
            <Tabs>
                {this.generateCardDetails()}
            </Tabs>
        );
    }
}

export default ClassCard
