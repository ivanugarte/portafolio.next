import Navbar from './Navbar'
import Footer from "../components/Footer";


const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className='container py-4'>{children}</main>
    <Footer />

  </>
)

export default Layout
