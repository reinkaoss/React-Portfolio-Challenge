import React from "react";
import "./style.css";
import projects from "../Gallery/projects.json"
import Projects from "../Projects/index"

function Gallery() {
  return (
    <div>
      <div className="cardContainer"> 
      <div class="row">
        <div class="col-xs-1-12">
          <div class="firstCard card">
            <div class="card-body">
              <h3 class="card-title">Weather Dashboard</h3>
              <p class="card-text">Text</p>
            </div>
          </div>
        </div>
        <div class="col-xs-1-12">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Title</h3>
              <p class="card-text">Text</p>
            </div>
          </div>
        </div>
        <div class="col-xs-1-12">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Title</h3>
              <p class="card-text">Text</p>
            </div>
          </div>
        </div>
        </div>
        </div>
        <div className="cardContainer"> 
        <div class="row">
        <div class="col-xs-1-12">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Title</h3>
              <p class="card-text">Text</p>
            </div>
          </div>
        </div>
        <div class="col-xs-1-12">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Title</h3>
              <p class="card-text">Text</p>
            </div>
          </div>
        </div>
        <div class="col-xs-1-12">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Title</h3>
              <p class="card-text">Text</p>
            </div>
          </div>
        </div>
    </div>
    </div>
    {projects.map(project => (
        <Projects
          id={project.id}
          name={project.name}
          languages={project.languages}
          description={project.description}
        />
      ))}   
      </div>
  );
}

export default Gallery;
