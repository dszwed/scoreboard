import {Component} from "react";

class Stat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }

        this.handleChangeValue= this.handleChangeValue.bind(this);
    }

    handleChangeValue(value) {
        this.setState({
            value: value
        });

        this.props.onChange(parseInt(value));
    }

    render() {
        return (
            <div className="form-control">
                <input min={0} className="input" type="number" value={this.state.value} onChange={e => this.handleChangeValue(e.currentTarget.value)} />
            </div>
        )
    }
}

export default Stat;