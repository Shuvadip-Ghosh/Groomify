import bg_img from "./images/abt-bg.png"
import './CSS/Desk.css';
import './CSS/Tab.css';
import './CSS/Mob.css';
import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Services from "./Components/Services.js";
import Gallery from "./Components/Gallery.js";
import FAQ from "./Components/FAQ.js";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <About bg_img={bg_img}/>
    <Services bg_img={bg_img}/>
    <Gallery bg_img={bg_img}/>
    <FAQ bg_img={bg_img}/>
    <Footer/>
    </>
  );
}

export default App;
