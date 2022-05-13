import {Component} from "react";
import Formatter from "./formatter";
import Stat from "./stat";
import PlayerStats from "./playerStats";
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
                    <table className="table table-compact">
                        <thead className="text-center">
                        <tr>
                            <th className="">
                                Player
                            </th>
                            <th className="">
                                Points
                            </th>
                            <th colSpan={3}>
                                2PTS
                            </th>
                            <th colSpan={3}>
                                1PTS
                            </th>
                            {/*<th colSpan={3}>*/}
                            {/*    FT*/}
                            {/*</th>*/}
                        </tr>
                        <tr>
                            <th colSpan={2}></th>
                            <th>M</th>
                            <th>A</th>
                            <th>%</th>
                            <th>M</th>
                            <th>A</th>
                            <th>%</th>
                            {/*<th>M</th>*/}
                            {/*<th>A</th>*/}
                            {/*<th></th>*/}
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.players.map((player, i) => {
                            // Return the element. Also pass key
                            return (<PlayerStats player={player} key={player.id} onScore={this.props.onScore} />)
                        })}
                        </tbody>
                    </table>
            </div>
        )
    }
}

export default PlayerStatsPanel;