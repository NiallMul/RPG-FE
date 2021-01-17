import React, {Component} from 'react';
import ClassDetails from "./ClassDetails";
import Tabs from "../tabs/Tabs";


class ClassCard extends Component {

    constructor() {
        super();
        this.state = {
            classInfo: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/class")
            .then(promise => promise.json())
            .then(data => {
                this.setState({classInfo: data})
            });
    }

    render() {
        let classCards = this.state.classInfo;
        const cardList = [];
        if (classCards && classCards.length !== 0) {
            classCards.forEach((card, i) => {
                cardList.push(<ClassDetails key={i}
                                            label={card.className}
                                            alignment={card.alignment}
                                            hitDie={card.hitDie}
                                            skillsPerLevel={card.skillsPerLevel}
                                            weaponAndArmourProficiency={card.weaponAndArmourProficiency}
                                            role={card.role}/>);
            })
        } else {
            cardList.push(<ClassDetails key="1" label="Barbarian" classDesc="they're angry"/>)
            cardList.push(<ClassDetails key="2" label="Fighter" classDesc="they're fighty"/>)
            cardList.push(<ClassDetails key="3" label="Warlock" classDesc="they're weird"/>)
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
