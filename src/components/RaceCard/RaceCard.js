import React, {Component} from 'react';
import RaceDetails from "./RaceDetails";
import Tabs from "../tabs/Tabs";


class RaceCard extends Component {

    constructor(props) {
        super(props);
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
                cardList.push(<RaceDetails key={i}
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
            cardList.push(<RaceDetails key="1" label="Dwarf" description="they're small"/>)
            cardList.push(<RaceDetails key="2" label="Elf" description="they're tall"/>)
            cardList.push(<RaceDetails key="3" label="Human" description="they're likeable"/>)
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

export default RaceCard
