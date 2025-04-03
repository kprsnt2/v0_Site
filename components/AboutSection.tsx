"use client"

import { forwardRef } from "react"

interface AboutSectionProps {
  id: string
  isNightMode: boolean
}

const AboutSection = forwardRef<HTMLElement, AboutSectionProps>(({ id, isNightMode }, ref) => {
  return (
    <section id={id} ref={ref} className={`py-16 ${isNightMode ? "bg-gray-800/50" : "bg-gray-100/50"} rounded-lg my-8`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold mb-8 text-center ${isNightMode ? "text-emerald-400" : "text-emerald-600"}`}>
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className={`${isNightMode ? "text-gray-300" : "text-gray-700"} mb-4`}>
              I'm Prashanth Kumar, a Data Analyst with expertise in SQL, BigQuery, Python, Tableau, Looker Studio, and
              Alteryx (core certified). I'm passionate about transforming raw data into meaningful insights that drive
              business decisions.
            </p>
            <p className={`${isNightMode ? "text-gray-300" : "text-gray-700"} mb-4`}>
              With a strong foundation in data analysis tools and techniques, I strive to uncover patterns and trends
              that can lead to improved efficiency and strategic growth. My experience spans across various aspects of
              data analysis, from data cleaning and preprocessing to creating insightful visualizations and reports.
            </p>
            <p className={`${isNightMode ? "text-gray-300" : "text-gray-700"}`}>
              I'm always eager to learn new technologies and methodologies to enhance my skills and deliver more value
              in my work. Recently, I've been exploring AI integration and advanced Python visualization techniques to
              expand my toolkit.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className={`p-6 rounded-lg shadow-lg w-full max-w-md ${isNightMode ? "bg-gray-900" : "bg-white"}`}>
              <h3 className={`text-xl font-semibold mb-4 ${isNightMode ? "text-emerald-400" : "text-emerald-600"}`}>
                Skills & Expertise
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Python", level: 9 },
                  { name: "SQL & BigQuery", level: 9 },
                  { name: "Data Visualization", level: 8 },
                  { name: "Tableau", level: 8 },
                  { name: "AI/ML Integration", level: 7 },
                  { name: "Cloud Technologies", level: 7 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}/10</span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${isNightMode ? "bg-gray-700" : "bg-gray-200"}`}>
                      <div
                        className={`h-2 rounded-full ${isNightMode ? "bg-emerald-500" : "bg-emerald-600"}`}
                        style={{ width: `${skill.level * 10}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

AboutSection.displayName = "AboutSection"
export default AboutSection

