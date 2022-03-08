import React from 'react';
import '../../styles/Projects.css';
import CodeQuiz from "../../components/assets/code-quiz.jpg";
import project1 from "../../components/assets/project-1.jpg";
import WeatherDashboard from "../../components/assets/Weather-Dashboard.jpg";
import DayPlanner from "../../components/assets/Work-day-Scheduler.jpg";
const projects = [
  {
    name: "BOOKS-R-US",
    image: project1,
    alt: "Project1",
    desc: "Book search application using Google Books API and New York Times API",
    tech: "Javascript, HTML, CSS, Third Party API",
    App: "https://mckinleyvj.github.io/books-r-us/",
    Repo: "https://github.com/mckinleyvj/books-r-us",
  },
  {
    name: "CodeQuiz",
    image: CodeQuiz,
    alt: "Code-quiz",
    desc: "A times Coding quiz application",
    tech: "HTML, CSS, JavaScript",
    App: "https://binukaw.github.io/Code-Quiz/",
    Repo: "https://github.com/BinukaW/Code-Quiz",
  },
  {
    name: "Weather Dashboard",
    image: WeatherDashboard,
    alt: "Weather Dashboard App",
    desc: "A simple weather dashboard to display current weather of different cities including temperature, UV Index, wind speedand five day weather forecasts.",
    tech: "HTML, CSS, JQuery, Bootstrap, Moment.js, Open Weather - API",
    App: "https://binukaw.github.io/Weather-Dashboard/",
    Repo: "https://github.com/BinukaW/Weather-Dashboard",
  },
  {
    name: "Day Planner",
    image: DayPlanner,
    alt: "Day Planner App",
    desc: "The planner that allows the user to store tasks & agendas for a busy business day.",
    tech: "HTML, CSS, JQuery, Bootstrap, Moment.js",
    App: "https://binukaw.github.io/Workday-Schedule/",
    Repo: "https://github.com/BinukaW/Workday-Schedule",
  },
];

export default function Work() {
  return (
    <div className="Work">
      <h1>Portfolio</h1>
      <div className="project-container">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <h2 className="project-name">{project.name}</h2>
            <p>{project.desc}<br></br>
            {project.tech}</p>
            <img
              className="project-img"
              src={project.image}
              alt={project.alt}
            />
          <h6>            
            <a href={project.App} target="_blank" rel="noreferrer"> Application</a> ||
            <a href={project.Repo} target="_blank" rel="noreferrer"> Repository</a>
          </h6>
          </div>))}
          </div></div>
  );
}