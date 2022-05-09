import {Component} from "react";

class Formatter extends Component {
    constructor(props) {
        super(props);

        this.format = this.format.bind(this);
    }

    format() {
        return typeof this.props.number === 'number' ? this.props.number.toFixed(2) + '%' : this.props.number;
    }

    render() {
        return this.format();
    }
}

export default Formatter;

