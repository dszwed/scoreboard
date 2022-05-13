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
                            <th>2PM</th>
                            <th>2PA</th>
                            <th>2P%</th>
                            <th>1PM</th>
                            <th>1PA</th>
                            <th>1P%</th>
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