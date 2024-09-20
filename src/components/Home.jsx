import LandingPage from "../pages/LandingPage"
import Clients from "./Clients"
import AboutUs from "./AboutUs"
import Services from "./Services"
import Collaborators from "./Collaborators"

const Home = () => {
  return (
    <>
    <LandingPage/>
    <Collaborators/>
    <AboutUs/>
    <Services/>

    <Clients/>
    
    </>
  )
}

export default Home