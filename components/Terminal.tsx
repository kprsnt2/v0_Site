"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

interface TerminalProps {
  isNightMode: boolean
  toggleMode: () => void
}

export default function Terminal({ isNightMode, toggleMode }: TerminalProps) {
  const [prompt, setPrompt] = useState("explorer@kprsnt.in:~%")
  const [userInput, setUserInput] = useState("")
  const [outputLines, setOutputLines] = useState<string[]>([])
  const [typedText, setTypedText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [welcomeMessage, setWelcomeMessage] = useState("")

  const terminalOutputRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const commandNotFoundResponses = [
    "Oops! '${command}' isn't recognized. Type 'help' to see available commands.",
    "Command not found: ${command}. Type 'help' for a list of commands.",
    "Hmm, I don't know the command '${command}'. Try 'help' for assistance.",
    "'${command}' is not a valid command. Check 'help' for more info.",
    "Unrecognized command: '${command}'. Use 'help' to see what you can do.",
    "Sorry, '${command}' is not recognized. Use 'help' to see available commands.",
    "'${command}' doesn't seem to be a valid command. Try 'help' for more info.",
    "The command '${command}' is not found. Use 'help' for a list of commands.",
    "'${command}' is not a recognized command. See 'help' for a list of available commands.",
  ]

  useEffect(() => {
    typeText()

    const message = `
<span class="site-name">/kprsnt.in</span>📊📈📉💹📊📉📈📊🔍💻📈💼📊📈🗂️🔍📋📅
<span class="last-login">Last login: ${new Date().toLocaleString()} on ttys009</span>

Welcome to my interactive terminal portfolio!

I'm a Data Analyst passionate about turning data into insights.
Explore my skills, projects, and connect with me through various commands.

Personal Projects: <a href="https://storygemini.streamlit.app/" target="_blank">AI Story Teller</a>  <a href="https://plotcharts.streamlit.app/" target="_blank">Plot Charts</a>  <a href="https://github.com/kprsnt2" target="_blank">GitHub</a>

<span class="help-instruction">Type 'help' or 'ls' to see available commands.</span>
    `

    setWelcomeMessage(message)
    setOutputLines([message])

    // Focus the input when component mounts
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [outputLines])

  const typeText = () => {
    const text = "kprsnt.in"
    let i = 0
    const typing = setInterval(() => {
      if (i < text.length) {
        setTypedText((prev) => prev + text.charAt(i))
        i++
      } else {
        clearInterval(typing)
        setIsTypingComplete(true)
      }
    }, 100)
  }

  const scrollToBottom = () => {
    if (terminalOutputRef.current) {
      terminalOutputRef.current.scrollTop = terminalOutputRef.current.scrollHeight
    }
  }

  const processCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setOutputLines((prev) => [...prev, `<span class="command-input">${prompt} ${userInput}</span>`])

      const [command, ...args] = userInput.trim().toLowerCase().split(" ")

      // Process commands
      switch (command) {
        case "help":
          showHelp()
          break
        case "ls":
          listFiles()
          break
        case "projects":
          showFunProjects()
          break
        case "blog":
          showBlog()
          break
        case "social":
          showSocialMedia()
          break
        case "connect":
          showConnect()
          break
        case "resume":
          showResume()
          break
        case "about":
        case "hello":
          showAbout()
          break
        case "clear":
          clearScreen()
          break
        case "mode":
          toggleMode()
          break
        default:
          const randomIndex = Math.floor(Math.random() * commandNotFoundResponses.length)
          const errorMessage = commandNotFoundResponses[randomIndex].replace("${command}", command)
          setOutputLines((prev) => [...prev, `<span class="command-response">${errorMessage}</span>`])
      }

      setUserInput("")
    }
  }

  const showHelp = () => {
    setOutputLines((prev) => [
      ...prev,
      `<span class="command-response">Available commands:
  help - Show this help message     ls - List available information     about - Show information about me     blog - View the blog     projects - View my personal projects     social - Show social media links      connect - Show how to connect for 1:1 sessions      resume - View my resume
  clear - Clear the screen      mode - Toggle day/night mode</span>`,
    ])
  }

  const listFiles = () => {
    setOutputLines((prev) => [
      ...prev,
      '<span class="command-response">about  social  connect  resume  projects  blog</span>',
    ])
  }

  const showSocialMedia = () => {
    setOutputLines((prev) => [
      ...prev,
      `<span class="command-response">Social Media Links:
Twitter/X: <a href="https://x.com/prashanth_29" target="_blank">X Link</a>
LinkedIn: <a href="https://www.linkedin.com/in/prashanth-kumar-kadasi-b5281765/" target="_blank">LinkedIn Profile</a>
GitHub: <a href="https://github.com/kprsnt2" target="_blank">Github Link</a>
Tableau Public: <a href="https://public.tableau.com/app/profile/prashanth.kumar2458/vizzes" target="_blank">Tableau Profile</a>
Instagram: <a href="https://www.instagram.com/kprsnt/" target="_blank">Instagram Profile</a>
YouTube: <a href="https://www.youtube.com/@kprsnt" target="_blank">YouTube Link</a></span>`,
    ])
  }

  const showFunProjects = () => {
    setOutputLines((prev) => [
      ...prev,
      `<span class="command-response">Check out my fun projects: <a href="https://storygemini.streamlit.app/" target="_blank">AI Story Teller</a>  <a href="https://plotcharts.streamlit.app/" target="_blank">Plot Charts</a>  <a href="https://github.com/kprsnt2" target="_blank">GitHub</a></span>`,
    ])
  }

  const showBlog = () => {
    setOutputLines((prev) => [
      ...prev,
      `<span class="command-response">Read my latest blog posts: <a href="https://kprsnt.in/blog" target="_blank">Blog</a></span>`,
    ])
  }

  const showConnect = () => {
    setOutputLines((prev) => [
      ...prev,
      `<span class="command-response">To connect with me for a 1:1 session:
Please use this link to schedule a meeting: <a href="https://cal.com/kprsnt" target="_blank">Meeting Link</a></span>`,
    ])
  }

  const showResume = () => {
    setOutputLines((prev) => [
      ...prev,
      `<span class="command-response">View my resume: <a href="https://drive.google.com/file/d/1D6IJ6UMDkc715H_GLPbWLxemahpLh18G/view" target="_blank">Resume Link</a></span>`,
    ])
  }

  const clearScreen = () => {
    setOutputLines([welcomeMessage])
  }

  const showAbout = () => {
    setOutputLines((prev) => [
      ...prev,
      `<span class="command-response">
Welcome to my site, kprsnt.in

I'm Prashanth Kumar, a Data Analyst with expertise in SQL, BigQuery, Python, Tableau, Looker Studio, and Alteryx (core certified). 

I'm passionate about transforming raw data into meaningful insights that drive business decisions. With a strong foundation in data analysis tools and techniques, I strive to uncover patterns and trends that can lead to improved efficiency and strategic growth.

My experience spans across various aspects of data analysis, from data cleaning and preprocessing to creating insightful visualizations and reports. I'm always eager to learn new technologies and methodologies to enhance my skills and deliver more value in my work.

If you're interested in data analysis, business intelligence, or just want to chat about the latest trends in the tech world, feel free to reach out! I'm always open to connecting with fellow professionals and enthusiasts.
</span>`,
    ])
  }

  return (
    <div
      className={`terminal-container rounded-lg shadow-xl overflow-hidden border ${
        isNightMode ? "bg-gray-950 border-gray-700" : "bg-white border-gray-300"
      }`}
      style={{ height: "70vh", maxHeight: "600px" }}
    >
      <div className="terminal-header flex items-center p-3 border-b border-gray-700">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className={`text-sm ${isNightMode ? "text-gray-400" : "text-gray-600"}`}>terminal@kprsnt.in</div>
        <div className="ml-auto">
          <button onClick={toggleMode} className="text-xl">
            {isNightMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      <div
        className={`terminal-body p-4 font-mono text-sm overflow-y-auto ${
          isNightMode ? "text-gray-300" : "text-gray-800"
        }`}
        style={{ height: "calc(100% - 48px)" }}
      >
        <div
          ref={terminalOutputRef}
          className="terminal-output"
          dangerouslySetInnerHTML={{ __html: outputLines.join("<br>") }}
          style={{ height: "calc(100% - 30px)", overflowY: "auto" }}
        />

        <div className="input-line flex mt-2">
          <span className="prompt text-red-500">{prompt}</span>
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={processCommand}
            className={`flex-grow ml-2 bg-transparent border-none outline-none ${
              isNightMode ? "text-gray-300" : "text-gray-800"
            }`}
            autoFocus
          />
        </div>
      </div>

      <style jsx>{`
        .terminal-output :global(.site-name) {
          color: ${isNightMode ? "#58a6ff" : "#2563eb"};
          font-weight: bold;
        }
        
        .terminal-output :global(.last-login) {
          color: ${isNightMode ? "#8b949e" : "#6b7280"};
        }
        
        .terminal-output :global(.help-instruction) {
          color: ${isNightMode ? "#7ee787" : "#059669"};
        }
        
        .terminal-output :global(.command-input) {
          color: inherit;
        }
        
        .terminal-output :global(.command-response) {
          color: ${isNightMode ? "#a8b5d1" : "#264f78"};
        }
        
        .terminal-output :global(a) {
          color: ${isNightMode ? "#ce9178" : "#af5b29"};
          text-decoration: none;
        }
        
        .terminal-output :global(a:hover) {
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}

