import { TradeListContainer } from "./components/TradeListContainer";

function App() {
  return (
    <>
      <header className="mb-4">
        <h1 className="text-lg font-bold">Trade Tracker</h1>
        {/* <AppMenu /> */}
      </header>
      <main>
        <TradeListContainer />
      </main>
    </>
  );
}

export default App;
