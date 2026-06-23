import AI from "../assets/AI.png"

const projects = [
  {
    id: "project-1",
    title: "InterExp.AI-Train with AI. Impress in reality.",
    description:
      "An AI-based interview preparation platform that helps users practice mock interviews, get instant feedback on their answers, and track improvement over time.",
    image: AI,
    techStack: ["React", "Node.js", "Express", "MongoDB", "AI API"], 
    githubLink: "https://github.com/alokbhagat971-bit/InterExp.AI",
    liveLink: "", // add your deployed link once it's live
    featured: true,
  },
  {
    id: "project-2",
    title: "Car Price Prediction App",
    description:
      "A web app that predicts the resale price of a car based on factors like brand, year, fuel type, and kilometers driven, using a machine learning model served via a Flask API and integrated into a MERN frontend.",
    image: "/src/assets/car.png",
    techStack: ["React",  "Python", "Flask", "scikit-learn" , "ML"],
    githubLink: "https://github.com/alokbhagat971-bit/Car-Price-Predictor",
    liveLink: "",
    featured: true,
  },
  {
    id: "project-3",
    title: "Expense Manager App",
    description:
      "A personal finance app to log income and expenses, categorize transactions, and visualize monthly spending trends.",
    image: "/src/assets/expense.png",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/alokbhagat971-bit/Expense-Manager",
    liveLink: "",
    featured: false,
  },
  {
    id: "project-4",
    title: "Notes Creating and Tracking App",
    description:
      "A simple and clean note-taking app with create, delete, and search functionality, backed by a MongoDB database.",
    image: "/src/assets/notes.png",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/alokbhagat971-bit/Notes-App",
    liveLink: "",
    featured: false,
  },
];

export default projects;