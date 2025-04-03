"use client"

import { useState, useEffect } from "react"
import Terminal from "@/components/Terminal"
import PortfolioSection from "@/components/PortfolioSection"
import VisualizationSection from "@/components/VisualizationSection"
import ProjectsSection from "@/components/ProjectsSection"
import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import { useInView } from "react-intersection-observer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("terminal")
  const [isNightMode, setIsNightMode] = useState(true)
  const [terminalMinimized, setTerminalMinimized] = useState(false)

  const { ref: terminalRef, inView: terminalInView } = useInView({ threshold: 0.3 })
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.3 })
  const { ref: visualizationRef, inView: visualizationInView } = useInView({ threshold: 0.3 })
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.3 })
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.3 })

  useEffect(() => {
    // Update active section based on scroll position
    if (terminalInView) setActiveSection("terminal")
    else if (aboutInView) setActiveSection("about")
    else if (visualizationInView) setActiveSection("visualizations")
    else if (projectsInView) setActiveSection("projects")
    else if (contactInView) setActiveSection("contact")
  }, [terminalInView, aboutInView, visualizationInView, projectsInView, contactInView])

  const toggleMode = () => {
    setIsNightMode(!isNightMode)
  }

  const toggleTerminal = () => {
    setTerminalMinimized(!terminalMinimized)
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main
      className={`min-h-screen ${isNightMode ? "bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100" : "bg-gradient-to-br from-gray-100 to-white text-gray-800"}`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${isNightMode ? "bg-gray-900/80" : "bg-white/80"} backdrop-blur-sm`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">
              <span className={`${isNightMode ? "text-emerald-400" : "text-emerald-600"}`}>/kprsnt.in</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("terminal")}
                className={`hover:text-emerald-400 transition-colors ${activeSection === "terminal" ? (isNightMode ? "text-emerald-400" : "text-emerald-600") : ""}`}
              >
                Terminal
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`hover:text-emerald-400 transition-colors ${activeSection === "about" ? (isNightMode ? "text-emerald-400" : "text-emerald-600") : ""}`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("visualizations")}
                className={`hover:text-emerald-400 transition-colors ${activeSection === "visualizations" ? (isNightMode ? "text-emerald-400" : "text-emerald-600") : ""}`}
              >
                Visualizations
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`hover:text-emerald-400 transition-colors ${activeSection === "projects" ? (isNightMode ? "text-emerald-400" : "text-emerald-600") : ""}`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`hover:text-emerald-400 transition-colors ${activeSection === "contact" ? (isNightMode ? "text-emerald-400" : "text-emerald-600") : ""}`}
              >
                Contact
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={toggleMode} className="text-2xl">
                {isNightMode ? "☀️" : "🌙"}
              </button>
              <button
                onClick={toggleTerminal}
                className={`md:hidden ${isNightMode ? "text-emerald-400" : "text-emerald-600"}`}
              >
                {terminalMinimized ? "Open Terminal" : "Minimize Terminal"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Terminal Section */}
      <section
        id="terminal"
        ref={terminalRef}
        className={`pt-24 pb-16 ${terminalMinimized ? "hidden md:block" : "block"}`}
      >
        <div className="container mx-auto px-6">
          <Terminal isNightMode={isNightMode} toggleMode={toggleMode} />
        </div>
      </section>

      {/* Portfolio Content */}
      <PortfolioSection>
        <AboutSection id="about" ref={aboutRef} isNightMode={isNightMode} />

        <VisualizationSection id="visualizations" ref={visualizationRef} isNightMode={isNightMode} />

        <ProjectsSection id="projects" ref={projectsRef} isNightMode={isNightMode} />

        <ContactSection id="contact" ref={contactRef} isNightMode={isNightMode} />
      </PortfolioSection>

      {/* Footer */}
      <footer className={`py-8 ${isNightMode ? "bg-gray-900" : "bg-gray-100"}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold">kprsnt.in</div>
              <p className={isNightMode ? "text-gray-400" : "text-gray-600"}>Data Analyst & AI Engineer</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/kprsnt2"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  isNightMode ? "text-gray-400 hover:text-emerald-400" : "text-gray-600 hover:text-emerald-600"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/prashanth-kumar-kadasi-b5281765/"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  isNightMode ? "text-gray-400 hover:text-emerald-400" : "text-gray-600 hover:text-emerald-600"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://x.com/prashanth_29"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  isNightMode ? "text-gray-400 hover:text-emerald-400" : "text-gray-600 hover:text-emerald-600"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="mailto:kprsnt@gmail.com"
                className={
                  isNightMode ? "text-gray-400 hover:text-emerald-400" : "text-gray-600 hover:text-emerald-600"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm" style={{ color: isNightMode ? "#8b949e" : "#6b7280" }}>
            &copy; {new Date().getFullYear()} Prasanth Kumar Kadasi. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}

