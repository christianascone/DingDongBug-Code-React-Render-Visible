import "./App.css";
import NinjaComponent from "./components/NinjaComponent";

function App() {
  return (
    <>
      <h1>Ding Dong Bug</h1>
      <div className="card">
        {Array.from({ length: 2000 }, (_, index) => (
          // index as key is not a good practice.
          // in real scenarios use something different
          <NinjaComponent key={index} id={index + 1} />
        ))}
      </div>
    </>
  );
}

export default App;
