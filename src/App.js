import bg_img from "./images/abt-bg.png"
import './CSS/Mob.css';
import './CSS/Tab.css';
import './CSS/Desk.css';
import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Footer from "./Components/Footer.js";
import Services from "./Components/Services.js";

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <About bg_img={bg_img}/>
    <Services bg_img={bg_img}/>
    <Footer/>
    </>
  );
}

export default App;
