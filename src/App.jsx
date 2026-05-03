import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">

      {/* NAVBAR */}
      <Navbar />

      <main className="flex-grow">

        {/* HERO */}
        <HeroSection />

        {/* ABOUT */}
        <div id="about" className="scroll-mt-24">
          <AboutSection />
        </div>

        {/* SKILLS */}
        <div id="skills" className="scroll-mt-24">
          <SkillsSection />
        </div>

        {/* PROJECTS */}
        <div id="projects" className="scroll-mt-24">
          <ProjectsSection />
        </div>

        {/* CONTACT */}
        <div id="contact" className="scroll-mt-24">
          <ContactSection />
        </div>
      </main>

      {/* ✅ FOOTER */}
        <Footer />
    </div>
  )
}

export default App