"use client"

import { forwardRef, useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  BarChart,
  PieChart,
  Line,
  Bar,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "@/components/ui/chart"

interface VisualizationSectionProps {
  id: string
  isNightMode: boolean
}

const VisualizationSection = forwardRef<HTMLElement, VisualizationSectionProps>(({ id, isNightMode }, ref) => {
  const [activeTab, setActiveTab] = useState("skills")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Sample data for visualizations
  const skillsData = [
    { name: "Python", value: 90 },
    { name: "SQL", value: 90 },
    { name: "Data Viz", value: 85 },
    { name: "Tableau", value: 80 },
    { name: "AI/ML", value: 70 },
    { name: "Cloud", value: 70 },
  ]

  const projectTimelineData = [
    { name: "Jan", Gemma3: 4, AIStoryTeller: 3, AITutor: 0, Plotcharts: 0 },
    { name: "Feb", Gemma3: 5, AIStoryTeller: 4, AITutor: 0, Plotcharts: 0 },
    { name: "Mar", Gemma3: 6, AIStoryTeller: 4, AITutor: 2, Plotcharts: 0 },
    { name: "Apr", Gemma3: 8, AIStoryTeller: 5, AITutor: 3, Plotcharts: 2 },
    { name: "May", Gemma3: 9, AIStoryTeller: 7, AITutor: 5, Plotcharts: 4 },
    { name: "Jun", Gemma3: 10, AIStoryTeller: 8, AITutor: 7, Plotcharts: 6 },
  ]

  const dataDistributionData = [
    { name: "Structured", value: 45 },
    { name: "Semi-structured", value: 30 },
    { name: "Unstructured", value: 25 },
  ]

  const COLORS = isNightMode
    ? ["#10b981", "#34d399", "#6ee7b7", "#a7f3d0", "#d1fae5", "#ecfdf5"]
    : ["#047857", "#059669", "#10b981", "#34d399", "#6ee7b7", "#a7f3d0"]

  return (
    <section id={id} ref={ref} className="py-16">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold mb-4 text-center ${isNightMode ? "text-emerald-400" : "text-emerald-600"}`}>
          Data Visualizations
        </h2>
        <p className={`text-center ${isNightMode ? "text-gray-300" : "text-gray-700"} mb-12`}>
          Showcasing my Python visualization skills with dynamic, data-driven charts
        </p>

        {isClient && (
          <Tabs defaultValue="skills" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="skills">Skills Analysis</TabsTrigger>
                <TabsTrigger value="timeline">Project Timeline</TabsTrigger>
                <TabsTrigger value="distribution">Data Distribution</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="skills" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Skills Proficiency</CardTitle>
                  <CardDescription>Visualization of my technical skills and proficiency levels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={skillsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" name="Proficiency (%)" fill={isNightMode ? "#10b981" : "#059669"} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="timeline" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Project Development Timeline</CardTitle>
                  <CardDescription>Progress of my projects over time (complexity score)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={projectTimelineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Gemma3" stroke={COLORS[0]} activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="AIStoryTeller" stroke={COLORS[1]} />
                        <Line type="monotone" dataKey="AITutor" stroke={COLORS[2]} />
                        <Line type="monotone" dataKey="Plotcharts" stroke={COLORS[3]} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="distribution" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Data Types Distribution</CardTitle>
                  <CardDescription>Types of data I work with in my projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full flex justify-center">
                    <ResponsiveContainer width="100%" height="100%" maxWidth={500}>
                      <PieChart>
                        <Pie
                          data={dataDistributionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={150}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {dataDistributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}

        <div
          className="mt-12 p-6 rounded-lg shadow-lg bg-opacity-50 backdrop-blur-sm text-center"
          style={{
            backgroundColor: isNightMode ? "rgba(31, 41, 55, 0.5)" : "rgba(243, 244, 246, 0.5)",
          }}
        >
          <h3 className={`text-xl font-semibold mb-4 ${isNightMode ? "text-emerald-400" : "text-emerald-600"}`}>
            Python Visualization Expertise
          </h3>
          <p className={isNightMode ? "text-gray-300" : "text-gray-700"}>
            These visualizations are created using Python libraries like Matplotlib, Seaborn, and Plotly. I specialize
            in transforming complex data into clear, insightful visualizations that tell a story.
          </p>
        </div>
      </div>
    </section>
  )
})

VisualizationSection.displayName = "VisualizationSection"
export default VisualizationSection

