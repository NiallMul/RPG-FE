import React, {Component} from 'react';
import './ClassDetails.css';
import unknown from '../../images/unknown.jpg';
import barbarian from '../../images/barbarian.jpg';
import bard from '../../images/bard.jfif';
import druid from '../../images/druid.png';
import cleric from '../../images/cleric.jfif';
import fighter from '../../images/fighter.jpg';
import monk from '../../images/monk.png';
import paladin from '../../images/paladin.jfif';
import ranger from '../../images/ranger.jfif';
import sorcerer from '../../images/sorcerer.jfif';
import wizard from '../../images/wizard.jfif';
import rogue from '../../images/rogue.jfif'

class ClassDetails extends Component {

    selectImage = (imageName) => {
        switch (imageName) {
            case 'barbarian':
                return barbarian;
            case 'bard':
                return bard;
            case 'druid':
                return druid;
            case 'cleric':
                return cleric;
            case 'fighter':
                return fighter;
            case 'monk':
                return monk;
            case 'paladin':
                return paladin;
            case 'ranger':
                return ranger;
            case 'sorcerer':
                return sorcerer;
            case 'wizard':
                return wizard;
            case 'rogue':
                return rogue;
            default:
                return unknown;
        }
    }

    showAbilities = () => {
        window.alert(`abilities belonging to ${this.props.label}`);
    }

    render() {
        return (<div>
            <h2>Class Details</h2>
            <img id="race-image" src={this.selectImage(this.props.label.toLowerCase())} alt={this.props.label}/>
            <table id="race_details">
                <thead>
                <tr>
                    <th><h3>Class Alignment:</h3></th>
                    <th><h3>Class Skills:</h3></th>
                    <th><h3>Class hit dice:</h3></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        {this.props.alignment}
                    </td>
                    <td>
                        to be filled
                    </td>
                    <td>
                        {this.props.hitDie}
                    </td>

                </tr>
                </tbody>
                <thead>
                <tr>
                    <th><h3>Class Roles:</h3></th>
                    <th><h3>Class Skills per level:</h3></th>
                    <th><h3>Weapon and armour proficiencies</h3></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        {this.props.role}
                    </td>
                    <td>
                        {this.props.skillsPerLevel} + intelligence modifier
                    </td>
                    <td>
                        {this.props.weaponAndArmourProficiency}
                    </td>

                </tr>
                </tbody>
            </table>
            <h2>Abilities</h2>
            <button onClick={this.showAbilities}>Show abilities</button>
        </div>);
    }
}

export default ClassDetails
