import { TradeListContainer } from "./components/TradeListContainer";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
