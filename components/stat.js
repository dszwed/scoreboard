import {Component} from "react";

class Stat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }

    }

    changeBy( step ) {
        let newValue = this.state.value + step;

        if(step < 0) {
            newValue = 0;
        }

        this.setState({
            value: newValue
        });

        this.props.onChange(newValue);
    }

    render() {
        return (
            <div className="flex items-center">
                <span className="stat-value">{this.state.value}</span>
                {/*<input min={0} className="input" type="number" value={this.state.value} onChange={e => this.handleChangeValue(e.currentTarget.value)} />*/}
                <div className="flex flex-col ml-1">
                    <button className="btn btn-success btn-xs" onClick={() => this.changeBy(1)}>+</button>
                    <button className="btn btn-error btn-xs" onClick={() => this.changeBy(-1)}>-</button>
                </div>
            </div>
        )
    }
}

export default Stat;