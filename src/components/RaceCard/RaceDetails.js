import React, {Component} from 'react';
import './RaceDetails.css';
import dwarf from '../../images/dwarf.jpg';
import human from '../../images/human.jpg';
import elf from '../../images/elf.png';
import halfelf from '../../images/half-elf.jpg';
import halforc from '../../images/half-orc.jpg';
import halfling from '../../images/halfling.jpg';
import gnome from '../../images/gnome.jpg';
import unknown from '../../images/unknown.jpg';

class RaceDetails extends Component {

    selectImage = (imageName) => {
        switch (imageName) {
            case 'dwarves':
                return dwarf;
            case 'humans':
                return human;
            case 'elves':
                return elf;
            case 'half-orcs':
                return halforc;
            case 'half-elves':
                return halfelf;
            case 'gnomes':
                return gnome;
            case 'halflings':
                return halfling;
            default:
                return unknown;
        }
    }

    render() {
        return (<div>
            <h2>Race Details</h2>
            <img id="race-image" src={this.selectImage(this.props.label.toLowerCase())} alt={this.props.label}/>
            <table id="race_details">
                <thead>
                    <tr>
                        <th><h3>Physical Description:</h3></th>
                        <th><h3>Society details:</h3></th>
                        <th><h3>Relations details:</h3></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {this.props.physicalDescription}
                        </td>
                        <td>
                            {this.props.society}
                        </td>
                        <td>
                            {this.props.relations}
                        </td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th><h3>Alignment details:</h3></th>
                        <th><h3>Religion details:</h3></th>
                        <th><h3>Adventurer details:</h3></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {this.props.alignment}
                        </td>
                        <td>
                            {this.props.religion}
                        </td>
                        <td>
                            {this.props.adventurers}
                        </td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th><h3>Male Name suggestions:</h3></th>
                        <th><h3>Female Name suggestions:</h3></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        {this.props.maleName}
                    </td>
                    <td>
                        {this.props.femaleName}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>);
    }
}

export default RaceDetails
