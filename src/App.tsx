import { TradeListContainer } from "./components/TradeListContainer";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Trade Tracker</h1>
        {/* <AppMenu /> */}
      </header>
      <main>
        <TradeListContainer />
      </main>
    </>
  );
}

export default App;
