import {Component} from "react";
import TeamScoreboard from "./teamScoreboard";
import Clock from "./clock";
import styles from '../styles/Home.module.css'

class Scoreboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        }

        this.handleAddGameEvent = this.handleAddGameEvent.bind(this);
    }

    handleAddGameEvent() {
        // this.setState({
        //     score: this.state.score += by
        // });
    }

    render() {
        return (
            <div>
                <div className={styles.scoreboard}>
                    <TeamScoreboard teamName={this.props.homeTeam.name} score={this.props.homeTeam.score} players={this.props.homeTeam.players}/>
                    {/*<Clock timer={this.props.timer}/>*/}
                    <TeamScoreboard teamName={this.props.awayTeam.name} score={this.props.awayTeam.score} players={this.props.awayTeam.players}/>
                </div>
            </div>
        )
    }
}

export default Scoreboard;