import "./App.css";
import rnvLogo from "./assets/rnv-logo.svg";
import retreats, { RetreatType } from "./retreats";

function App() {
  return (
    <>
      {/* You can keep or remove this logo */}
      <div>
        <img src={rnvLogo} className="logo" alt="Retreats and Venues logo" />
      </div>

      {/* Probably remove this heading */}
      <h1>
        <b>Retreats and Venues Cards Assignment!</b>
      </h1>

      {/* Some kind of search to filter the cards */}
      {/* TODO */}

      {/* Cards below here, possibly in other component as you please */}
      {/* TODO */}
      {retreats.map((retreat: RetreatType) => (
        <div key={retreat.id} className="card">
          <h2>{retreat.title}</h2>
        </div>
      ))}
    </>
  );
}

export default App;
