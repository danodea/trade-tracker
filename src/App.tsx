import { TradeList } from "./components/TradeListView/trade-list/TradeList";

function App() {
  return (
    <>
      <h1>Trade Tracker</h1>
      <TradeListSearch />
      <TradeList />
    </>
  );
}

export default App;
