import { Outlet } from "react-router-dom";
import "./Layout.css";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="site-layout">
      <Header />

      <main className="site-main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;