import React, {Component} from 'react';
import Tabs from "../tabs/Tabs";
import RaceCard from "../RaceCard/RaceCard";
import ClassCard from "../ClassCard/ClassCard";

class SectionSelector extends Component {
    render() {
        return (
            <Tabs>
                <RaceCard label="Race"/>
                <ClassCard label="Class"/>
            </Tabs>
        )
    }
} export default SectionSelector
