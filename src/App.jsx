import { Button } from 'react-scroll'
import Blog from './Blog'
import ButtonToTop from './components/ButtonToTop'
import DigitalMenu from './DigitalMenu'
import Footer from './Footer'
import Hero from './Hero'
import KakRaboti from './KakRaboti'
import Klienti from './Klienti'
import Navbar from './Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <DigitalMenu />
      <KakRaboti />
      <Klienti />
      <Blog />
      <Footer />
      <ButtonToTop />
    </div>
  )
}

export default App
