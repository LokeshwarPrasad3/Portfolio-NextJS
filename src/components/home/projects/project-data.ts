export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "fullstack" | "react" | "js";
  techStack: string[];
  liveLink: string;
  repoLink: string;
  featured?: boolean;
}

export const FullStackProjectsArray: Project[] = [
  {
    id: "fs-1",
    title: "Qualifyrs – Mock Interview Platform",
    description:
      "Client project: A full-stack mock interview and AI-powered preparation platform built for scalable exam practice.",
    image: "/projects/qualifyrs.jpg",
    category: "fullstack",
    techStack: [
      "Next.js",
      "MongoDB",
      "Redux",
      "zod",
      "otp signup",
      "googleauth",
      "Express.js",
      "AI SDK",
    ],
    liveLink: "https://qualifyrs.com",
    repoLink: "https://github.com/LokeshwarPrasad3/",
    featured: true,
  },
  {
    id: "fs-2",
    title: "Budgetter",
    description:
      "A comprehensive budget management application allowing users to track expenses, set limits, and visualize spending habits.",
    image: "/projects/budgetter.png",
    category: "fullstack",
    techStack: [
      "React",
      "Tailwind",
      "Typescript",
      "Node.js",
      "google auth",
      "MongoDB",
      "Express",
      "Redux",
    ],
    liveLink: "https://budgetter.lokeshwardewangan.in/",
    repoLink: "https://github.com/LokeshwarPrasad3/Budgetter-Webapp",
    featured: true,
  },
  {
    id: "fs-3",
    title: "PingPoint",
    description:
      "Real-time chat application supporting private messaging, group chats, and instant notifications.",
    image: "/projects/chat-web-app.jpg",
    category: "fullstack",
    techStack: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
    liveLink: "https://pingpoint.netlify.app/",
    repoLink: "https://github.com/LokeshwarPrasad3/Real-Time-ChatApp",
  },
  {
    id: "fs-4",
    title: "AI Chat Studio",
    description: "AI-powered conversational chat app with a fast and responsive UI.",
    image: "/projects/chatbot.svg",
    category: "fullstack",
    techStack: ["Next.js", "AI SDK", "Google Gemini API", "Tailwind CSS"],
    liveLink: "https://assistant.lokeshwardewangan.in",
    repoLink: "https://github.com/LokeshwarPrasad3/AI-Chat-Studio-NextApp",
  },
  {
    id: "fs-7",
    title: "Birthday Wish Maker",
    description:
      "An interactive platform to create and share personalized birthday wishes with custom animations and messages.",
    image: "/projects/makebirthdaywish.png",
    category: "fullstack",
    techStack: ["React", "Tailwind", "Framer motion", "MongoDB", "Express"],
    liveLink: "https://makebirthday.netlify.app",
    repoLink: "https://github.com/LokeshwarPrasad3/MakeBirthdayWish",
  },
  {
    id: "fs-8",
    title: "Real-Time Weather App",
    description:
      "Delivers accurate weather forecasts with real-time updates using OpenWeatherMap API and geolocation.",
    image: "/projects/real-time-weather.jpg",
    category: "fullstack",
    techStack: ["ExpressJS", "HBS", "OpenWeather API", "CSS Modules"],
    liveLink: "https://weather-report-lokeshwar.vercel.app/",
    repoLink: "https://github.com/LokeshwarPrasad3/Real-Time-Weather-App",
  },
  {
    id: "fs-5",
    title: "College Canteen Project",
    description:
      "Digital canteen ordering system enabling students to pre-order meals and skip the queue.",
    image: "/projects/smart-canteen.png",
    category: "fullstack",
    techStack: ["React", "ExpressJS", "Firebase", "Razorpay", "Bootstrap"],
    liveLink: "https://canteen-webapp.netlify.app/",
    repoLink: "https://github.com/LokeshwarPrasad3/Attendance-Management-WebApp",
  },
  {
    id: "fs-6",
    title: "Attendance Management",
    description:
      "A system for colleges to manage student attendance, generate reports, and track absenteeism efficiently.",
    image: "/projects/attendance-management.png",
    category: "fullstack",
    techStack: ["React", "Node.js", "MongoDB", "ContextAPI"],
    liveLink: "https://college-attendances.netlify.app/",
    repoLink: "https://github.com/LokeshwarPrasad3/Attendance-Management-WebApp",
  },
];

export const ReactFrontendProjectsArray: Project[] = [
  {
    id: "react-1",
    title: "DSA Visualization",
    description:
      "Interactive visualization of Data Structures and Algorithms to help students understand complex concepts.",
    image: "/projects/dsa-visualization.jpg",
    category: "react",
    techStack: ["React", "Algorithms", "CSS Animations"],
    liveLink: "https://lokeshwar-dsa-visualize.netlify.app/",
    repoLink: "https://github.com/LokeshwarPrasad3/DSA-Visualization-Project",
  },
  {
    id: "react-2",
    title: "College Journal Research",
    description:
      "A digital repository for college research journals, facilitating easy access and submission of academic papers.",
    image: "/projects/ijsrgi.png",
    category: "react",
    techStack: ["React", "TailwindCSS"],
    liveLink: "https://ijsrgi.com",
    repoLink: "https://github.com/LokeshwarPrasad3/College-Journal-Web",
  },
  {
    id: "react-3",
    title: "Face Emotion Detector",
    description:
      "Uses browser-based AI to detect and classify facial emotions in real-time via webcam.",
    image: "/projects/emotion-detector.png",
    category: "react",
    techStack: ["React", "face-api.js"],
    liveLink: "https://livefacedetect.netlify.app",
    repoLink: "https://github.com/LokeshwarPrasad3/Live-Face-Insights",
  },
  {
    id: "react-4",
    title: "Text Utils",
    description:
      "A utility tool for text manipulation including case conversion, word counting, and formatting.",
    image: "/projects/text-utils.png",
    category: "react",
    techStack: ["React", "Bootstrap"],
    liveLink: "https://text-transform-tools.netlify.app/",
    repoLink: "https://github.com/LokeshwarPrasad3/Text-Utils-React-Webite",
  },
  {
    id: "react-5",
    title: "ToDo List in Typescript",
    description:
      "A robust task management app built to demonstrate TypeScript integration with React state management.",
    image: "/projects/todo-list.jpg",
    category: "react",
    techStack: ["React", "TypeScript", "Context API"],
    liveLink: "https://todo-list-lokeshwar.netlify.app/",
    repoLink:
      "https://github.com/LokeshwarPrasad3/my-portfolio-projects/blob/main/html/My-Todo-App.html",
  },
];

export const FrontendProjectsArray: Project[] = [
  {
    id: "js-1",
    title: "Online Notes",
    description: "Simple browser-based note-taking app using LocalStorage for persistence.",
    image: "/projects/online-notes.jpg", // Placeholder
    category: "js",
    techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    liveLink: "https://lokeshwar-creatives-v0.netlify.app/html/online-notes",
    repoLink:
      "https://github.com/LokeshwarPrasad3/my-portfolio-projects/blob/main/html/Online-Notes.html",
  },
  {
    id: "js-2",
    title: "Music Web App",
    description: "A clone of a music streaming interface with custom audio player controls.",
    image: "/projects/music-web-app.jpg", // Placeholder
    category: "js",
    techStack: ["HTML", "CSS", "JavaScript", "Audio API"],
    liveLink: "#",
    repoLink: "https://github.com/LokeshwarPrasad3/Clone-Music-Website",
  },
  {
    id: "js-3",
    title: "QR Code Generator",
    description: "Generates downloadable QR codes for any given URL or text input.",
    image: "/projects/qr-code-generator.jpg", // Placeholder
    category: "js",
    techStack: ["JavaScript", "QR Library", "DOM Manipulation"],
    liveLink: "https://lokeshwar-creatives-v0.netlify.app/html/qr-code-generator",
    repoLink:
      "https://github.com/LokeshwarPrasad3/my-portfolio-projects/blob/main/html/QR-code-generator.html",
  },
  {
    id: "js-4",
    title: "Set Timer",
    description: "A countdown timer and alarm clock with custom sound alerts.",
    image: "/projects/set-timer.jpg", // Placeholder
    category: "js",
    techStack: ["JavaScript", "Date Object", "Intervals"],
    liveLink: "https://lokeshwar-creatives-v0.netlify.app/html/alarm-clock",
    repoLink:
      "https://github.com/LokeshwarPrasad3/my-portfolio-projects/blob/main/html/Alarm-Clock.html",
  },
  {
    id: "js-5",
    title: "Calculator",
    description: "Fully functional standard calculator supporting basic arithmetic operations.",
    image: "/projects/calculator.jpg", // Placeholder
    category: "js",
    techStack: ["JavaScript", "CSS Grid", "Event Handling"],
    liveLink: "https://lokeshwar-creatives-v0.netlify.app/html/my-calculator",
    repoLink:
      "https://github.com/LokeshwarPrasad3/my-portfolio-projects/blob/main/html/My-Calculator.html",
  },
  {
    id: "js-6",
    title: "Random Joke",
    description: "Fetches and displays random programming jokes from a public API.",
    image: "/projects/joke.jpg", // Placeholder
    category: "js",
    techStack: ["JavaScript", "Fetch API", "Async/Await"],
    liveLink: "https://lokeshwar-creatives-v0.netlify.app/html/random-joke-app",
    repoLink:
      "https://github.com/LokeshwarPrasad3/my-portfolio-projects/blob/main/html/Random-Joke-App.html",
  },
  {
    id: "js-7",
    title: "Digital Clock",
    description: "A neon-styled digital clock showing current time with seconds.",
    image: "/projects/digital-clock.jpg", // Placeholder
    category: "js",
    techStack: ["JavaScript", "Date API", "CSS Effects"],
    liveLink: "https://lokeshwar-creatives-v0.netlify.app/html/clock-watch",
    repoLink:
      "https://github.com/LokeshwarPrasad3/my-portfolio-projects/blob/main/html/Clock-Watch.html",
  },
  {
    id: "js-8",
    title: "Password Generator",
    description: "Create strong, random passwords with customizable parameters.",
    image: "/projects/password-generator.jpg", // Placeholder
    category: "js",
    techStack: ["JavaScript", "String Manipulation", "Clipboard API"],
    liveLink: "https://lokeshwar-password-generator.netlify.app/",
    repoLink: "https://lokeshwar-password-generator.netlify.app/",
  },
  {
    id: "js-9",
    title: "Find Your Public IP",
    description: "Simple utility to display the user's current public IP address.",
    image: "/projects/find-your-ip.jpg", // Placeholder
    category: "js",
    techStack: ["JavaScript", "IP API", "XHR"],
    liveLink: "https://lokeshwar-creatives-v0.netlify.app/html/show-my-ip",
    repoLink:
      "https://github.com/LokeshwarPrasad3/my-portfolio-projects/blob/main/html/Show-My-IP.html",
  },
];
