import {Component} from "react";
import TeamScoreboard from "./teamScoreboard";
import Clock from "./clock";

class Scoreboard extends Component {
    constructor(props) {
        super(props);

        console.log(props);
    }

    render() {
        return (
            <div>
                <div className="grid grid-cols-scoreboard">
                    <TeamScoreboard score={this.props.homeTeam.score} players={this.props.homeTeam.players}/>
                    <Clock timer={this.props.timer}/>
                    <TeamScoreboard score={this.props.awayTeam.score} players={this.props.awayTeam.players}/>
                </div>
            </div>
        )
    }
}

export default Scoreboard;