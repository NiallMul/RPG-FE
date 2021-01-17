import React, {Component} from 'react';
import Tabs from "../tabs/Tabs";
import RaceCard from "../RaceCard/RaceCard";
import ClassCard from "../ClassCard/ClassCard";
import CharacterCreater from "../CharacterCreater/CharacterCreater";

class SectionSelector extends Component {
    render() {
        return (
            <Tabs>
                <RaceCard label="Race"/>
                <ClassCard label="Class"/>
                <CharacterCreater label="Character Creation"/>
            </Tabs>
        )
    }
} export default SectionSelector
