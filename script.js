var App = function App() {
  return React.createElement(Stopwatch, null);
};

var container = document.getElementById("root");
var root = ReactDOM.createRoot(container);
root.render(React.createElement(App, null));