import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import { signOut as fbSignOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import Button from "./Button";

export default function Navbar() {
  const [user] = useAuthState(auth);

  const signOut = async () => {
    await fbSignOut(auth);
  };

  return (
    <nav className="p-4 ">
      <div className="container max-w-5xl mx-auto flex flex-row justify-between items-center">
        <NavLink to="/">Joinews</NavLink>

        <ul className="flex flex-row gap-4 items-center">
          <li>
            <NavLink to="browse">Browse</NavLink>
          </li>
          <li>
            <NavLink to="collections">Collections</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
        </ul>

        {!user && (
          <NavLink to="login">
            <Button color="mustard">Login or sign up</Button>
          </NavLink>
        )}

        {user && (
          <Button color="white" onClick={signOut}>
            Sign out
          </Button>
        )}
      </div>
    </nav>
  );
}
