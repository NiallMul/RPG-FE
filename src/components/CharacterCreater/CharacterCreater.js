import React, {Component} from 'react';
import Select from 'react-select'
import AssignStat from './AssignStat';
import './CharaterCreater.css';


class CharacterCreater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classList: [],
            raceList: [],
            characteristics: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/race/racelist")
            .then(promise => promise.json())
            .then(data => {
                this.setState({raceList: data})
            });
        fetch("http://localhost:8080/class/classlist")
            .then(promise => promise.json())
            .then(data => {
                this.setState({classList: data})
            });
    }

    generateStats = (e) => {
        e.preventDefault();
        this.state.characteristics = [];
        let stats = this.state.characteristics;
        for (let i = 0; i < 6; i++) stats.push(Math.floor(Math.random() * 20) + 1);
        this.setState({
            characteristics: stats
        })
    };

    renderStats() {
        return this.state.characteristics.map(function (o, i) {
            return (
                <td key={i}>
                    {o}
                </td>
            );
        });
    }

    render() {
        let races = this.state.raceList;

        let raceOptions = [];
        races.map(item =>
            raceOptions.push({label: item, value: item}),
        );

        let classes = this.state.classList;
        let classOptions = [];
        classes.map(item =>
            classOptions.push({label: item, value: item}),
        );

        return (
            <div>
                <form>
                    <label>Character name: </label><input type="text" id="characterName"/>
                    <label id="race_label">Race: </label> <Select id="raceselect" label="race" options={raceOptions}/>
                    <label id="class_label">Class: </label><Select id="classselect" label="class"
                                                                   options={classOptions}/>
                    <button onClick={this.generateStats}>Roll the dice</button>
                    <table id="dice-results">
                        <thead>
                        <tr>
                            <th>Dice 1</th>
                            <th>Dice 2</th>
                            <th>Dice 3</th>
                            <th>Dice 4</th>
                            <th>Dice 5</th>
                            <th>Dice 6</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            {this.renderStats()}
                        </tr>
                        </tbody>
                    </table>
                    <AssignStat diceRoles={this.state.characteristics}/>

                    <table id="characteristics-table">
                        <thead id="characteristics-headers">
                        <tr>
                            <th>Strength</th>
                            <th>Dexterity</th>
                            <th>Intelligence</th>
                            <th>Constitution</th>
                            <th>Wisdom</th>
                            <th>Charisma</th>
                        </tr>
                        </thead>
                        <tbody id="characteristics-values">
                        <tr>
                            <td id="strength-roll"/>
                            <td id="dexterity-roll"/>
                            <td id="intelligence-roll"/>
                            <td id="constitutions-roll"/>
                            <td id="wisdom-roll"/>
                            <td id="charisma-roll"/>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default CharacterCreater
