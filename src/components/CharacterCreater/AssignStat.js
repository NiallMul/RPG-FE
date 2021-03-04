import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import './AssignStat.css';

function SimpleDialog(props) {
    const {onClose, diceRoles, open} = props;

    const [dice, setDice] = useState("");

    const [diceUsed, setDiceUsed] = useState([]);

    const handleClose = () => {
        onClose();
    };

    const selectRollValue = (dice) => {
        let id = dice.currentTarget.attributes['id'].nodeValue
        let diceScore = dice.currentTarget.attributes.value.value;
        //let  =
        setDice(`${id}/${diceScore}`);
    }

    const assignValue = (attr) => {
        diceUsed.push(dice.substr(0, dice.indexOf("/")));
        setDiceUsed(diceUsed);
        console.log(diceUsed);
        debugger;
        let attrValue = document.getElementById(`${attr.target.attributes[4].nodeValue}-roll`);
        let diceBtn = document.getElementById(dice.substr(0, dice.indexOf("/")))

        attrValue.appendChild(document.createTextNode(`${dice.substr(dice.indexOf("/")+1)}`));
    }

    const renderDiceRolls = (dice) => {
        let diceResults;
        if (dice) {
            diceResults = dice.diceRoles.map((item, index) => <ListItem button
                                                                        onClick={selectRollValue}
                                                                        value={item}
                                                                        id={`dice-${index}`}>{item}</ListItem>);
        } else {
            diceResults = <ListItem button>No dice results found</ListItem>
        }
        return diceResults;
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Dice Roles</DialogTitle>
            <label id={dice ? "selectionLabel" : "selectionLabelHidden"}>Now select the attribute you wish to
                assign the dice roll to</label>
            <List component="nav" className="diceRolesSelection">
                {
                    renderDiceRolls({diceRoles})
                }
            </List>
            <List component="nav" className="skillSelection">
                <ListItem button value="strength" onClick={assignValue}>Str</ListItem>
                <ListItem button value="dexterity" onClick={assignValue}>Dex</ListItem>
                <ListItem button value="intelligence" onClick={assignValue}>Int</ListItem>
                <ListItem button value="constitutions" onClick={assignValue}>Con</ListItem>
                <ListItem button value="wisdom" onClick={assignValue}>Wis</ListItem>
                <ListItem button value="charisma" onClick={assignValue}>Cha</ListItem>
            </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    diceRoles: PropTypes.array.isRequired
};

export default function AssignStat(props) {
    const [open, setOpen] = React.useState(false);
    const diceRoles = props.diceRoles;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Assign dice scores
            </Button>
            <SimpleDialog open={open} onClose={handleClose} diceRoles={diceRoles}/>
        </div>
    );
}
