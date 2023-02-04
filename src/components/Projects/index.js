import React from 'react'

function Projects(props) {
  return (
    <div className="card2">
      <div className="img-container">
        {/* <img alt={props.name} src={props.image} /> */}
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>languages:</strong> {props.languages}
          </li>
          <li>
            <strong>description:</strong> {props.description}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Projects