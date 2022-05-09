import {Component} from "react";
import Formatter from "./formatter";
const formatter = new Intl.NumberFormat('pl-PL', { maximumSignificantDigits: 2 });

class PlayerStatsPanel extends Component {
    constructor(props) {
        super(props);
    }

    updateStat(player, by, statName, statType = 'other') {

        if (statType === 'points') {
            this.props.onUpdateScore(by);
        }

        player.updateStat(by, statName, statType);
    }

    render() {
        return (
            <div>
                <div>
                    <table class="table-auto">
                        <tbody>
                        {this.props.players.map((player, i) => {
                            // Return the element. Also pass key
                            return (<tr key={player.id}>
                                <td>
                                    {player.number} {player.name}
                                </td>
                                <td>
                                    <button className="btn btn--success" onClick={() => {
                                        this.updateStat(player, 1, 'free-throw', 'points')
                                    }}>
                                        FT
                                    </button>
                                    <button className="btn btn--success" onClick={() => {
                                        this.updateStat(player, 1, '2points', 'points')
                                    }}>
                                        +1
                                    </button>
                                    <button className="btn btn--success" onClick={() => {
                                        this.updateStat(player, 2, '3points', 'points')
                                    }}>
                                        +2
                                    </button>
                                    <button className="btn btn--danger" onClick={() => {
                                        this.updateStat(player, 0, 'free-throw', 'points')
                                    }}>
                                        FT
                                    </button>
                                    <button className="btn btn--danger" onClick={() => {
                                        this.updateStat(player, 0, '2points', 'points')
                                    }}>
                                        +1
                                    </button>
                                    <button className="btn btn--danger" onClick={() => {
                                        this.updateStat(player, 0, '3points', 'points')
                                    }}>
                                        +2
                                    </button>
                                </td>
                            </tr>)
                        })}
                        </tbody>
                    </table>
                </div>
                <div>
                    <table className="table-fixed">
                        <thead>
                        <tr>
                            <th class="border border-slate-500">
                                Player
                            </th>
                            <th class="border border-slate-500">
                                Points
                            </th>
                            <th>
                                3PTS
                            </th>
                            <th>
                                3PTS%
                            </th>
                            <th>
                                2PTS
                            </th>
                            <th>
                                2PTS%
                            </th>
                            <th>
                                FT
                            </th>
                            <th>
                                FT%
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.players.map((player, i) => {
                            // Return the element. Also pass key
                            return (<tr key={player.id}>
                                <td>
                                    {player.number} {player.name}
                                </td>
                                <td>
                                    {player.stats.getStat('points')}
                                </td>
                                <td>
                                    {player.stats.getStat('score3')}
                                </td>
                                <td>
                                    <Formatter number={player.stats.getStatPercentage('score3')} />
                                </td>
                                <td>
                                    {player.stats.getStat('score2')}
                                </td>
                                <td>
                                    {player.stats.getStatPercentage('score2')}
                                </td>
                                <td>
                                    {player.stats.getStat('free-throw')}
                                </td>
                                <td>
                                    {player.stats.getStatPercentage('free-throw')}
                                </td>
                            </tr>)
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default PlayerStatsPanel;