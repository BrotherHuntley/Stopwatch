class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startingTime: new Date(),
      minutes: 0,
      seconds: 0,
      stoppedTime: 0,
      running: false,
    };

    this.startTime = this.startTime.bind(this);
    this.stopTime = this.stopTime.bind(this);
    this.resetTime = this.resetTime.bind(this);
  }

  displaySeconds() {
    return this.state.seconds < 10
      ? "0" + this.state.seconds
      : this.state.seconds.toString();
  }

  displayMinutes() {
    return this.state.minutes < 10
      ? "0" + this.state.minutes
      : this.state.minutes.toString();
  }

  updateTime() {
    let currentTime = new Date();
    let elapsedTime =
      Math.floor((currentTime - this.state.startingTime) / 1000) +
      this.state.stoppedTime;
    this.setState({
      seconds: elapsedTime % 60,
      minutes: Math.floor(elapsedTime / 60),
    });
  }

  startTime() {
    this.setState({ startingTime: new Date(), running: true });
    this.timer = setInterval(() => this.updateTime(), 200);
  }

  stopTime() {
    if (this.state.running) {
      let currentTime = new Date();
      this.setState({
        running: false,
        stoppedTime:
          Math.floor((currentTime - this.state.startingTime) / 1000) +
          this.state.stoppedTime,
      });
      clearInterval(this.timer);
    }
  }

  resetTime() {
    if (this.state.running) {
      clearInterval(this.timer);
    }
    this.setState({
      minutes: 0,
      seconds: 0,
      stoppedTime: 0,
      running: false,
    });
  }

  render() {
    return (
      <div>
        <div className="stopwatch">
          <div className="stopwatch-ring-outer">
            <div className="stopwatch-ring-inner"></div>
          </div>
          <div className="stopwatch-buttons">
            <a onClick={this.startTime} href="#">
              <div className="stopwatch-button stopwatch-button-left">
                <div className="stopwatch-button-tip">
                  <div className="stopwatch-label">
                    <p className="stopwatch-start">Start</p>
                  </div>
                </div>
              </div>
            </a>
            <div className="stopwatch-button stopwatch-button-top">
              <a onClick={this.resetTime} href="#">
                <div className="stopwatch-button-tip">
                  <div className="stopwatch-label">
                    <p className="stopwatch-reset">Reset</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="stopwatch-button stopwatch-button-right">
              <a onClick={this.stopTime} href="#">
                <div className="stopwatch-button-tip">
                  <div className="stopwatch-label">
                    <p className="stopwatch-stop">Stop</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="stopwatch-display">
            <p className="stopwatch-display-text">
              <span>{this.displayMinutes()}:</span>
              <span>{this.displaySeconds()}</span>
            </p>
          </div>
          <div className="stopwatch-logo">
            <p className="stopwatch-logo-text">Stopwatch</p>
          </div>
        </div>
      </div>
    );
  }
}
