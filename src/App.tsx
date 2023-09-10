import Login from "./components/Login";
import { TradeListContainer } from "./components/TradeListContainer";
import { auth, database } from "./firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Logout from "./components/Logout";

function App() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <header className="mb-4 flex flex-row justify-between">
        <h1 className="mb-10 mt-6 text-center text-4xl font-bold">
          Trade Tracker
        </h1>
        {user && <Logout />}
      </header>
      <main>
        {loading && <div>loading...</div>}
        {error && <div>{error.message}</div>}
        {!loading && user && <TradeListContainer userId={user.uid} />}
        {!loading && !user && <Login />}
      </main>
    </>
  );
}

export default App;
