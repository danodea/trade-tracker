import { auth } from "./firebase/firebase";
import { Outlet } from "react-router-dom";

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
        <Outlet />
      </main>
    </>
  );
}

export default App;
