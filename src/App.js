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

      <p style={{ fontSize: "15px", textAlign: "right", width: "98%" }}>
        Last updated on May 17, 2025
      </p>
    </div>
  );
}

export default App;
