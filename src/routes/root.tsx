import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <main className="container max-w-5xl mx-auto">
        <Outlet />
      </main>
    </>
  );
}
