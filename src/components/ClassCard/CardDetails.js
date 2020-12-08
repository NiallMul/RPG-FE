import React, {Component} from 'react';

class CardDetails extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div label={this.props.label}>
            {this.props.description}
        </div>);
    }
}

export default CardDetails
