import logo from "./logo.svg";
import "./App.css";
import QuickLinks from "./components/QuickLinks";
import FeedContents from "./components/FeedContents";

function App() {
  return (
    <div className="App">
      <div className="contents">
        <QuickLinks />
        <FeedContents />
      </div>
    </div>
  );
}

export default App;
