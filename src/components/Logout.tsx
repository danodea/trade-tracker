import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

const Logout = () => {
  const [signOut, loading, error] = useSignOut(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <button
        onClick={async () => {
          await signOut();
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Logout;
