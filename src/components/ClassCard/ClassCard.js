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
        let raceCards = this.state.classInfo;
        const cardList = [];
        if (raceCards && raceCards.length !== 0) {
            raceCards.forEach((card, i) => {
                cardList.push(<ClassDetails key={i}
                                           label={card.className}
                                            alignment={card.alignment}
                                            hitDie={card.hitDie}
                                            skillsPerLevel={card.skillsPerLevel}
                                            weaponAndArmourProficiency={card.weaponAndArmourProficiency}
                                           role={card.role}/>);
                /*
                alignment: "nonlawful"
                className: "BARBARIAN"
                classSkills: null
                hitDie: 12
                role: "Barbarians excel in combat, possessing the martial prowess and fortitude to take on foes seemingly far superior to themselves. With rage granting them boldness and daring beyond that of most other warriors, barbarians charge furiously into battle and ruin all who would stand in their way"
                skillsPerLevel: 4
                weaponAndArmourProficiency: "A barbarian is proficient with all simple and martial weapons, light armor, medium armor, and shields (except tower shields)."
                 */
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
