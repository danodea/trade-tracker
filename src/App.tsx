import { TradeListContainer } from "./components/TradeListContainer";

function App() {
  return (
    <>
      <header className="mb-4">
        <h1 className="mb-10 mt-6 text-center text-4xl font-bold">
          Trade Tracker
        </h1>
        {/* <AppMenu /> */}
      </header>
      <main>
        <TradeListContainer />
      </main>
    </>
  );
}

export default App;
