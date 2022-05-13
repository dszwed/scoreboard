import {Component} from 'react'
import {teams} from "../data";

class FormControllerSelect extends Component {
    render(){
        return (
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">{this.props.label}</span>
                </label>
                <select className="select select-bordered" name={this.props.name}>
                    {this.props.options.map((option, index) => {
                        return <option value={option.value}>{option.label}</option>
                    })}
                </select>
            </div>
        )
    }
}

export default FormControllerSelect;