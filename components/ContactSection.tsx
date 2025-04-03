"use client"

import type React from "react"

import { forwardRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Twitter, Mail, Calendar } from "lucide-react"

interface ContactSectionProps {
  id: string
  isNightMode: boolean
}

const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(({ id, isNightMode }, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send this data to your backend
    console.log("Form submitted:", formData)
    alert("Thanks for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id={id} ref={ref} className={`py-16 ${isNightMode ? "bg-gray-800/50" : "bg-gray-100/50"} rounded-lg my-8`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold mb-4 text-center ${isNightMode ? "text-emerald-400" : "text-emerald-600"}`}>
          Get In Touch
        </h2>
        <p className={`text-center ${isNightMode ? "text-gray-300" : "text-gray-700"} mb-12`}>
          Have a question or want to work together? Reach out to me!
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <Card className={isNightMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Ways to connect with me</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className={isNightMode ? "text-emerald-400" : "text-emerald-600"} />
                  <a
                    href="mailto:kprsnt@gmail.com"
                    className={`${isNightMode ? "text-gray-300 hover:text-emerald-400" : "text-gray-700 hover:text-emerald-600"}`}
                  >
                    kprsnt@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className={isNightMode ? "text-emerald-400" : "text-emerald-600"} />
                  <a
                    href="https://cal.com/kprsnt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${isNightMode ? "text-gray-300 hover:text-emerald-400" : "text-gray-700 hover:text-emerald-600"}`}
                  >
                    Schedule a meeting
                  </a>
                </div>

                <div className="pt-4">
                  <h4 className="text-sm font-medium mb-3">Social Profiles</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/kprsnt2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full ${
                        isNightMode
                          ? "bg-gray-800 text-gray-300 hover:text-emerald-400"
                          : "bg-gray-100 text-gray-700 hover:text-emerald-600"
                      }`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/prashanth-kumar-kadasi-b5281765/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full ${
                        isNightMode
                          ? "bg-gray-800 text-gray-300 hover:text-emerald-400"
                          : "bg-gray-100 text-gray-700 hover:text-emerald-600"
                      }`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://x.com/prashanth_29"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full ${
                        isNightMode
                          ? "bg-gray-800 text-gray-300 hover:text-emerald-400"
                          : "bg-gray-100 text-gray-700 hover:text-emerald-600"
                      }`}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:w-2/3">
            <Card className={isNightMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={isNightMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={isNightMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={isNightMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={isNightMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}
                    />
                  </div>

                  <Button
                    type="submit"
                    className={
                      isNightMode ? "bg-emerald-600 hover:bg-emerald-700" : "bg-emerald-600 hover:bg-emerald-700"
                    }
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
})

ContactSection.displayName = "ContactSection"
export default ContactSection

