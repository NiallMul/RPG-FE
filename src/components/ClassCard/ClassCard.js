import React, {Component} from 'react';
import CardDetails from "./CardDetails";
import Tabs from "../tabs/Tabs";


class ClassCard extends Component {

    constructor() {
        super();
        this.state = {
            raceInfo: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/race")
            .then(promise => promise.json())
            .then(data => {
                this.setState({raceInfo: data})
            });

    }

    render() {
        let raceCards = this.state.raceInfo;
        const cardList = [];
        if (raceCards && raceCards.length !== 0) {
            raceCards.forEach((card, i) => {
                cardList.push(<CardDetails key={i}
                                           label={card.raceName}
                                           physicalDescription={card.physicalDesc}
                                           society={card.society}
                                           relations={card.relations}
                                           alignment={card.alignment}
                                           religion={card.religion}
                                           adventurers={card.adventurers}
                                           maleName={card.maleName}
                                           femaleName={card.femaleName}/>);
            })
        } else {
            cardList.push(<CardDetails key="1" label="Dwarf" description="they're small"/>)
            cardList.push(<CardDetails key="2" label="Elf" description="they're tall"/>)
            cardList.push(<CardDetails key="3" label="Human" description="they're likeable"/>)
        }
        return (
            <div>
                <Tabs>
                    {cardList}
                </Tabs>
            </div>
        );
    }
}

export default ClassCard
