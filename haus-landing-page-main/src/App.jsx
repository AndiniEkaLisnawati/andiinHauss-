import {NavigationBar} from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Service from "./components/Service.jsx";
import Promo from "./components/Promo.jsx";
import { FooterBar } from "./components/Footer.jsx";


function App() {

  return (
    <>
    <div className="bg-orange-200">

    <section className="bg-amber-400">
        <NavigationBar />
        <Hero />
    </section>
    <div>
        <Service></Service>
    </div>

    <div>
      <Promo></Promo>
    </div>

    <div>
      <FooterBar></FooterBar>
    </div>
    
    </div>
    </>
  )
}

export default App
