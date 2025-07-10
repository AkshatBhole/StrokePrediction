import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
