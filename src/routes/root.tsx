import { NavLink, Outlet } from "react-router-dom";
import Button from "../components/Button";

export default function Root() {
  return (
    <>
      <nav className="p-4 ">
        <div className="container max-w-5xl mx-auto flex flex-row justify-between items-center">
          <a href="/">Joinews</a>

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

          <NavLink to="login">
            <Button color="mustard">Login or sign up</Button>
          </NavLink>
        </div>
      </nav>
      <main className="container max-w-5xl mx-auto">
        <Outlet />
      </main>
    </>
  );
}
