import "./App.css";
import NinjaComponent from "./components/NinjaComponent";

function App() {
  return (
    <>
      <h1>Ding Dong Bug</h1>
      <div className="card">
        <NinjaComponent id={1} />
      </div>
    </>
  );
}

export default App;
