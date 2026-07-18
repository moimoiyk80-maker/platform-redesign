import { Outlet } from "react-router-dom";
import ScrollToTop from "../common/ScrollToTop";
import "./Layout.css";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="site-layout">
      <ScrollToTop />
      <Header />

      <main className="site-main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;