import { auth } from "../firebase/firebase";

export default function Home() {
  const { currentUser } = auth;

  return <div>{currentUser ? currentUser.email : "hi"}</div>;
}
