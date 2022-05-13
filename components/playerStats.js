import {Component} from "react";
import TeamScoreboard from "./teamScoreboard";
import Stat from "./stat";
import Formatter from "./formatter";

class PlayerStats extends Component {
    constructor(props) {
        super(props);

        this.state = {
            score: 0,
            score3Percent: 0,
            score2Percent: 0,
            scoreFTPercent: 0,
            score3Made: 0,
            score3Missed: 0,
            score3Attempts: 0,
            score2Made: 0,
            score2Missed: 0,
            score2Attempts: 0,
            scoreFTMade: 0,
            scoreFTMissed: 0,
            scoreFTAttempts: 0
        }

        this.handleUpdateScore3Made = this.handleUpdateScore3Made.bind(this);
        this.handleUpdateScore3Missed = this.handleUpdateScore3Missed.bind(this);

        this.handleUpdateScore2Made = this.handleUpdateScore2Made.bind(this);
        this.handleUpdateScore2Missed = this.handleUpdateScore2Missed.bind(this);

    }

    handleUpdateScore3Made(value) {
        this.setState({
            score3Made: value,
        }, this.onScore );

    }

    handleUpdateScore2Made(value) {
        this.setState({
            score2Made: value,
        }, this.onScore );

    }

    onScore() {
        let score = this.getScore();
        this.setState({
            score: score
        })
        this.calcScore3Percentage();
        this.calcScore2Percentage();
        this.props.player.score = score;

        this.props.onScore();
    }

    handleUpdateScore3Missed(value) {
        this.setState({
            score3Missed: value
        }, this.calcScore3Percentage);
    }

    handleUpdateScore2Missed(value) {
        this.setState({
            score2Missed: value
        }, this.calcScore2Percentage);
    }

    render() {
        return (
            <tr key={this.props.player.id}>
                <td>
                    {this.props.player.number} {this.props.player.name}
                </td>
                <td>
                    {this.state.score}
                </td>
                <td>
                    <Stat onChange={ this.handleUpdateScore3Made }/>
                </td>
                <td>
                    <Stat onChange={ this.handleUpdateScore3Missed }/>
                </td>
                <td>
                    <Formatter number={this.state.score3Percent} />
                </td>
                <td>
                    <Stat onChange={ this.handleUpdateScore2Made }/>
                </td>
                <td>
                    <Stat onChange={ this.handleUpdateScore2Missed }/>
                </td>
                <td>
                    <Formatter number={this.state.score2Percent} />
                </td>
                {/*<td>*/}
                {/*    {this.props.player.stats.getStat('free-throw')}*/}
                {/*</td>*/}
                {/*<td>*/}
                {/*    {this.props.player.stats.getStatPercentage('free-throw')}*/}
                {/*</td>*/}
            </tr>
        )
    }

    calcScore3Percentage() {
        let attempts = this.state.score3Made + this.state.score3Missed;
        this.setState({
            score3Percent:  attempts === 0 ? 0 :  (this.state.score3Made / attempts ) * 100,
            score3Attempts: attempts
        });
    }

    calcScore2Percentage() {
        let attempts = this.state.score2Made + this.state.score2Missed;
        this.setState({
            score2Percent:   attempts === 0 ? 0 : (this.state.score2Made / attempts ) * 100,
            score2Attempts: attempts
        });
    }

    getScore() {
        return this.state.score3Made * 2 + this.state.score2Made * 1 + this.state.scoreFTMade;
    }
}

export default PlayerStats;