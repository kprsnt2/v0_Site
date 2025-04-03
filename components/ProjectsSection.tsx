"use client"

import { forwardRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Terminal, BookOpen, Brain, BarChart, ExternalLink } from "lucide-react"

interface ProjectSectionProps {
  id: string
  isNightMode: boolean
}

const ProjectsSection = forwardRef<HTMLElement, ProjectSectionProps>(({ id, isNightMode }, ref) => {
  const projects = [
    {
      id: 1,
      title: "Gemma3 on Cloud Run",
      description:
        "Integrated Gemma3 model in Cloud Run using Ollama, with an Open WebUI frontend for chatting. This project demonstrates how to deploy and serve AI models in a cloud environment with a user-friendly interface.",
      technologies: ["Python", "Ollama", "Cloud Run", "WebUI", "AI"],
      link: "https://github.com/kprsnt2",
      icon: Terminal,
      detailed:
        "This project showcases the deployment of Google's Gemma3 model on Cloud Run using Ollama as the backend. The implementation includes a responsive Open WebUI frontend that allows users to interact with the AI model through a chat interface. The architecture ensures efficient scaling and cost-effective operation in the cloud environment.",
    },
    {
      id: 2,
      title: "AI Story Teller",
      description:
        "An application that generates creative stories based on user prompts using advanced AI models. Users can specify genres, characters, and plot elements to get customized stories.",
      technologies: ["Python", "NLP", "Streamlit", "OpenAI"],
      link: "https://storygemini.streamlit.app/",
      icon: BookOpen,
      detailed:
        "The AI Story Teller is built with Python and Streamlit, leveraging OpenAI's language models to generate creative narratives. The application features an intuitive interface where users can specify story parameters like genre, setting, characters, and plot elements. The backend processes these inputs to create coherent, engaging stories that match the user's requirements.",
    },
    {
      id: 3,
      title: "AI Tutor",
      description:
        "Personalized learning assistant that adapts to individual learning styles and provides tailored guidance. The system tracks progress and adjusts difficulty based on user performance.",
      technologies: ["Python", "ML", "Education", "React"],
      link: "https://github.com/kprsnt2",
      icon: Brain,
      detailed:
        "The AI Tutor is an adaptive learning platform that uses machine learning algorithms to personalize educational content. It analyzes user interactions and performance to identify knowledge gaps and learning preferences. Based on this analysis, it dynamically adjusts the curriculum, difficulty level, and teaching approach to optimize learning outcomes for each individual user.",
    },
    {
      id: 4,
      title: "Plotcharts CSV Analyzer",
      description:
        "Data visualization tool that generates insightful charts and graphs from CSV file uploads. Users can explore their data through interactive visualizations without coding knowledge.",
      technologies: ["Python", "Data Viz", "Matplotlib", "Pandas", "Streamlit"],
      link: "https://plotcharts.streamlit.app/",
      icon: BarChart,
      detailed:
        "Plotcharts is a user-friendly data visualization tool built with Python, Pandas, and Streamlit. It allows users to upload CSV files and instantly generate various types of charts and graphs without writing any code. The application includes features for data filtering, aggregation, and transformation, making it accessible for users without technical expertise to gain insights from their data.",
    },
  ]

  return (
    <section id={id} ref={ref} className="py-16">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold mb-4 text-center ${isNightMode ? "text-emerald-400" : "text-emerald-600"}`}>
          My Projects
        </h2>
        <p className={`text-center ${isNightMode ? "text-gray-300" : "text-gray-700"} mb-12`}>
          Showcasing my work in AI integration, data visualization, and web development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <Card
                key={project.id}
                className={`overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  isNightMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                }`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-full ${isNightMode ? "bg-gray-700" : "bg-gray-100"}`}>
                      <Icon className={`h-6 w-6 ${isNightMode ? "text-emerald-400" : "text-emerald-600"}`} />
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                  </div>
                  <CardDescription className={isNightMode ? "text-gray-400" : "text-gray-500"}>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className={`mb-4 ${isNightMode ? "text-gray-300" : "text-gray-700"}`}>{project.detailed}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant={isNightMode ? "outline" : "secondary"}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className={`w-full ${
                      isNightMode
                        ? "text-emerald-400 hover:text-emerald-300 border-emerald-800 hover:bg-emerald-950/50"
                        : "text-emerald-600 hover:text-emerald-700 border-emerald-200 hover:bg-emerald-50"
                    }`}
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
})

ProjectsSection.displayName = "ProjectsSection"
export default ProjectsSection

