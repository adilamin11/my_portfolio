import React from "react";
import Title from "../layouts/Title";
import {
  bookstore,
  players,
  tic,
  Reactlandingpage, 
  todo,
  exit_ease,
  
  
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Book Store using Mern"
          des="A bookstore application to browse, purchase, and manage books seamlessly. Built with React, Node.js, and MongoDB for an efficient and user-friendly shopping experience."  

          src={bookstore}
          github="https://github.com/adilamin11/bookstore"
          live="https://adils-bookstore.netlify.app/"
        />
        <ProjectsCard
          title="ExitEase"
          des="ExitEase is a streamlined employee resignation and exit interview system built with React, Node.js, and MongoDB for efficient and hassle-free offboarding.."  

          src={exit_ease}
          github="https://github.com/adilamin11/ExitEase_Task"
          live="https://adilrather.netlify.app/"
        />
        <ProjectsCard
          title="Players_Platform"
          des="A platform to connect, manage, and showcase player profiles. Features include user authentication and dynamic player listings, built using React for an interactive and seamless experience."  

          src={players}
          github="https://github.com/adilamin11/Players_platform"
          live="https://players-platform-selection.netlify.app/"
        />
          <ProjectsCard
            title=" React-Landing-Page"
            des="A sleek and responsive restaurant landing page built with React, featuring a dynamic menu, high-quality images, and smooth user navigation for an engaging browsing experience." 

            src={Reactlandingpage}
            github="https://github.com/adilamin11/React-Landing-Page"
            live="https://react-landing-page-seven-smoky.vercel.app/"
          />
        <ProjectsCard
          title="Tic-Toc-Toe"
          des="A classic Tic-Tac-Toe game with features to start, update, and reset matches. Includes real-time updates for instant gameplay changes and local storage support to save game progress using HTML, CSS, and JavaScript."
          src={tic}
          github="https://github.com/adilamin11/Tic_Toc_Toe"
          live="https://tic-toc-toe-adil.netlify.app/"
        />
        <ProjectsCard
          title="Todo_App"
          des="A multi-feature application with functionalities like user authentication, task categorization, note-taking, and reminders. Designed using React and optimized for performance."
          src={todo}
          github="https://github.com/adilamin11/ToDo-List"
          live="https://adilamin11.github.io/ToDo-List/"
        />
      </div>
    </section>
  );
};

export default Projects;
