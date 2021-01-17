import React, {Component} from 'react';
import Select from 'react-select'


class CharacterCreater extends Component {
    constructor() {
        super();
        this.state = {
            classList: [],
            raceList: []
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

    render() {
        debugger;
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
                    <label id="class_label">Class: </label><Select id="classselect" label="class" options={classOptions}/>
                </form>
            </div>
        )
    }
}

export default CharacterCreater
