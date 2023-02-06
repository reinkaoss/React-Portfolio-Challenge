import React from "react";
import "./style.css";
import projects from "../Gallery/projects.json";
import Projects from "../Projects/index";

function Gallery() {
  return (
    <div>
      <div>
        <div className="cardContainer">
          <div class="cardsRow row">
            <div class="col-md-6 col-lg-4">
              <div class="card">
                <img
                  class="card-img-top"
                  alt="Weather Dashboard API"
                  src={process.env.PUBLIC_URL + '/images/weatherAPI.png'}
                />
                <div class="card-body">
                  <h5 class="card-title">Weather Dashboard API</h5>
                  <p class="card-text">
                    <strong>Deployed App:</strong> https://reinkaoss.github.io/Server-Side-APIs-Weather-Dashboard/ 
                  </p>
                  <p class="card-text">
                    <strong>GitHub Repository:</strong> https://github.com/reinkaoss/Server-Side-APIs-Weather-Dashboard
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="card">
                <img
                  class="card-img-top"
                  alt="Weather Dashboard API"
                  src={process.env.PUBLIC_URL + '/images/readmeGen.jpeg'}
                />
                <div class="card-body">
                  <h5 class="card-title">Team Profile Generator</h5>
                  <p class="card-text">
                    <strong>Deployed App:</strong> N/A - NodeJS
                  </p>
                  <p class="card-text">
                    <strong>GitHub Repository:</strong> https://github.com/reinkaoss/Team-Profile-Generator
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="card">
                <img
                  class="card-img-top"
                  alt="Random Film Picker"
                  src={process.env.PUBLIC_URL + '/images/randomfilm.png'}
                />
                <div class="card-body">
                  <h5 class="card-title">Random film picker</h5>
                  <p class="card-text">
                    <strong>Deployed App:</strong> https://guilhermederetti.github.io/Random-Film-Picker/
                  </p>
                  <p class="card-text">
                    <strong>GitHub Repository:</strong> https://github.com/GuilhermeDeretti/Random-Film-Picker
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="card">
                <img
                  class="card-img-top"
                  alt="Daily Planner"
                  src={process.env.PUBLIC_URL + '/images/dailyPlanner.png'}
                />
                <div class="card-body">
                  <h5 class="card-title">Daily Planner app</h5>
                  <p class="card-text">
                    <strong>Deployed App:</strong> https://reinkaoss.github.io/Daily-Planner-App/
                  </p>
                  <p class="card-text">
                    <strong>GitHub Repository:</strong> https://github.com/reinkaoss/Daily-Planner-App
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="card">
                <img
                  class="card-img-top"
                  alt="Weather Dashboard API"
                  src={process.env.PUBLIC_URL + '/images/randompass.png'}
                />
                <div class="card-body">
                  <h5 class="card-title">Random Password Generator</h5>
                  <p class="card-text">
                    <strong>Deployed App:</strong> https://reinkaoss.github.io/Random_Password_Generator/
                  </p>
                  <p class="card-text">
                    <strong>GitHub Repository:</strong> https://github.com/reinkaoss/Random_Password_Generator
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="card">
                <img
                  class="card-img-top"
                  alt="Quizz"
                  src={process.env.PUBLIC_URL + '/images/jsQuizz.png'}
                />
                <div class="card-body">
                  <h5 class="card-title">JavaScript Quizz</h5>
                  <p class="card-text">
                    <strong>Deployed App:</strong> https://reinkaoss.github.io/js-quizz/
                  </p>
                  <p class="card-text">
                    <strong>GitHub Repository:</strong> https://github.com/reinkaoss/js-quizz
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* {projects.map(project => (
        <Projects
          title={project.title}
          deployed={project.deployed}
          image={project.image}
        />
      ))}    */}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
