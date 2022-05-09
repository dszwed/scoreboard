import {Component} from "react";
import styles from "../styles/TeamScoreboard.module.css";

const formatter = new Intl.NumberFormat('pl-PL', { minimumIntegerDigits: 2 });

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 10 * 60,
            isCounting: false
        }

        this.toggleTimer = this.toggleTimer.bind(this);

    }



    startTimer(){
        if(this.state.timer === 0) {
            alert("Koniec meczu!");
            this.stopTimer();
            return;
        }

        this.setState({ isCounting: true });
        this.interval = setInterval( () => {
            this.runTimer()
        }, 1000);
    }

    stopTimer(){
        this.setState({ isCounting: false });
        clearInterval(this.interval);
    }

    runTimer() {
        let timer = this.state.timer - 1;
        this.setState({ timer: timer })
    }

    toggleTimer(){
        if(this.state.isCounting) {
            this.stopTimer();
        } else {
            this.startTimer();
        }
    }

    render() {
        return (
            <div className={styles.board} onClick={this.toggleTimer}>
                {formatter.format(Math.floor(this.state.timer/60))}:{formatter.format(this.state.timer % 60)}
            </div>
        )
    }
}

export default Clock;