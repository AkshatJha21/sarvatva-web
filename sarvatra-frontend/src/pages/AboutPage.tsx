import AboutHero from "../components/AboutHero"
import AboutIdentity from "../components/AboutIdentity"
import AboutPurpose from "../components/AboutPurpose"
import Navbar from "../components/Navbar"

const AboutPage = () => {
  return (
    <div>
        <Navbar />
        <AboutHero />
        <AboutIdentity />
        <AboutPurpose />
    </div>
  )
}

export default AboutPage