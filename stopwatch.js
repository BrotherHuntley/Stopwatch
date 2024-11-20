var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
  _inherits(Stopwatch, _React$Component);

  function Stopwatch(props) {
    _classCallCheck(this, Stopwatch);

    var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this, props));

    _this.state = {
      startingTime: new Date(),
      minutes: 0,
      seconds: 0,
      stoppedTime: 0,
      running: false
    };

    _this.startTime = _this.startTime.bind(_this);
    _this.stopTime = _this.stopTime.bind(_this);
    _this.resetTime = _this.resetTime.bind(_this);
    return _this;
  }

  _createClass(Stopwatch, [{
    key: "displaySeconds",
    value: function displaySeconds() {
      return this.state.seconds < 10 ? "0" + this.state.seconds : this.state.seconds.toString();
    }
  }, {
    key: "displayMinutes",
    value: function displayMinutes() {
      return this.state.minutes < 10 ? "0" + this.state.minutes : this.state.minutes.toString();
    }
  }, {
    key: "updateTime",
    value: function updateTime() {
      var currentTime = new Date();
      var elapsedTime = Math.floor((currentTime - this.state.startingTime) / 1000) + this.state.stoppedTime;
      this.setState({
        seconds: elapsedTime % 60,
        minutes: Math.floor(elapsedTime / 60)
      });
    }
  }, {
    key: "startTime",
    value: function startTime() {
      var _this2 = this;

      this.setState({ startingTime: new Date(), running: true });
      this.timer = setInterval(function () {
        return _this2.updateTime();
      }, 200);
    }
  }, {
    key: "stopTime",
    value: function stopTime() {
      if (this.state.running) {
        var currentTime = new Date();
        this.setState({
          running: false,
          stoppedTime: Math.floor((currentTime - this.state.startingTime) / 1000) + this.state.stoppedTime
        });
        clearInterval(this.timer);
      }
    }
  }, {
    key: "resetTime",
    value: function resetTime() {
      if (this.state.running) {
        clearInterval(this.timer);
      }
      this.setState({
        minutes: 0,
        seconds: 0,
        stoppedTime: 0,
        running: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "stopwatch" },
          React.createElement(
            "div",
            { className: "stopwatch-ring-outer" },
            React.createElement("div", { className: "stopwatch-ring-inner" })
          ),
          React.createElement(
            "div",
            { className: "stopwatch-buttons" },
            React.createElement(
              "a",
              { onClick: this.startTime, href: "#" },
              React.createElement(
                "div",
                { className: "stopwatch-button stopwatch-button-left" },
                React.createElement(
                  "div",
                  { className: "stopwatch-button-tip" },
                  React.createElement(
                    "div",
                    { className: "stopwatch-label" },
                    React.createElement(
                      "p",
                      { className: "stopwatch-start" },
                      "Start"
                    )
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { className: "stopwatch-button stopwatch-button-top" },
              React.createElement(
                "a",
                { onClick: this.resetTime, href: "#" },
                React.createElement(
                  "div",
                  { className: "stopwatch-button-tip" },
                  React.createElement(
                    "div",
                    { className: "stopwatch-label" },
                    React.createElement(
                      "p",
                      { className: "stopwatch-reset" },
                      "Reset"
                    )
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { className: "stopwatch-button stopwatch-button-right" },
              React.createElement(
                "a",
                { onClick: this.stopTime, href: "#" },
                React.createElement(
                  "div",
                  { className: "stopwatch-button-tip" },
                  React.createElement(
                    "div",
                    { className: "stopwatch-label" },
                    React.createElement(
                      "p",
                      { className: "stopwatch-stop" },
                      "Stop"
                    )
                  )
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "stopwatch-display" },
            React.createElement(
              "p",
              { className: "stopwatch-display-text" },
              React.createElement(
                "span",
                null,
                this.displayMinutes(),
                ":"
              ),
              React.createElement(
                "span",
                null,
                this.displaySeconds()
              )
            )
          ),
          React.createElement(
            "div",
            { className: "stopwatch-logo" },
            React.createElement(
              "p",
              { className: "stopwatch-logo-text" },
              "Stopwatch"
            )
          )
        )
      );
    }
  }]);

  return Stopwatch;
}(React.Component);