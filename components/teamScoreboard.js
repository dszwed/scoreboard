import {Component} from "react";
import PlayerStatsPanel from "./playerStatsPanel";
import styles from "../styles/TeamScoreboard.module.css";

class TeamScoreboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: props.score
        }

        this.handleUpdateScoreBy = this.handleUpdateScoreBy.bind(this);
    }

    handleUpdateScoreBy(by) {
        this.setState({
            score: this.state.score += by
        });
    }

    render() {
        return (
            <div>
                <div className={styles.board}>{this.state.score}</div>
                <PlayerStatsPanel players={this.props.players} onUpdateScore={this.handleUpdateScoreBy} />
            </div>
        )
    }
}

export default TeamScoreboard;