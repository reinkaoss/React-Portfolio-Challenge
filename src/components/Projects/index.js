import React from 'react'

function Projects(props) {
  return (
    <div className="card2">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Deployed Link:</strong> {props.deployed}
          </li>
          <li>
            <strong>Repository:</strong> {props.repo}
          </li>
          <li>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Projects