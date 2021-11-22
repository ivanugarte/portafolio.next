import Navbar from './Navbar'
import Footer from "../components/Footer";


const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className='container py-4 bg-gray-900 '>{children}</main>
    <Footer />

  </>
)

export default Layout
