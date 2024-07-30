// import Navbar from "./Navbar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";

const Layout = ({ children }) => (
  <>
    <div id="whatsapp">
      <div className="btn-whatsapp">
        <Link
          href="https://api.whatsapp.com/send?phone=56936682021"
          target="_blank"
        >
          <img src="btn_whatsapp.png" alt="..." width="70px" height="70px" />
        </Link>
      </div>
    </div>
    <Navbar />
    <main className="container py-4">{children}</main>
    <Footer />
  </>
);

export default Layout;
