import Navbar from "./Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => (
  <>
    <div id="whatsapp">
      <div className="btn-whatsapp">
        <a
          href="https://api.whatsapp.com/send?phone=5636682021"
          target="_blank"
        >
          <img src="btn_whatsapp.png" alt="..." width="70px" height="70px" />
        </a>
      </div>
    </div>
    <Navbar />
    <main className="container py-4">{children}</main>
    <Footer />
  </>
);

export default Layout;
