import {Component} from "react";
import PlayerStatsPanel from "./playerStatsPanel";
import styles from "../styles/TeamScoreboard.module.css";
import homestyles from "../styles/Home.module.css";

class TeamScoreboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: props.score
        }

        this.handleUpdateScoreBy = this.handleUpdateScoreBy.bind(this);
    }

    handleUpdateScoreBy() {
        let score = 0;
        this.props.players.forEach(function(player){
            score += player.score;
        })

        this.setState({
            score: score
        });
    }

    render() {
        return (
            <div className={styles.teamScoreboard}>
                <div className="stat place-items-center">
                    <div className="stat-title">{this.props.teamName}</div>
                    <div className="stat-value">{this.state.score}</div>
                </div>
                <PlayerStatsPanel players={this.props.players} onScore={this.handleUpdateScoreBy} />
            </div>
        )
    }
}

export default TeamScoreboard;