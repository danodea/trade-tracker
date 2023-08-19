import { TradeListContainer } from "./components/TradeListContainer";
import { auth } from "./firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <header className="mb-4">
        <h1 className="mb-10 mt-6 text-center text-4xl font-bold">
          Trade Tracker
        </h1>
        {/* <AppMenu /> */}
      </header>
      <main>{user && <TradeListContainer />}</main>
    </>
  );
}

export default App;
