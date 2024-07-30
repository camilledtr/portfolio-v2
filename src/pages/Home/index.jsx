import React from 'react'

import Page from '../../templates/Page'
import { projects } from '../../data/projects'
import Textarea from './TextArea'

const Home = () => {
  return (
    <Page>
      <div className="line-counter">
        {Array.from({ length: 200 }, (_, index) => (
          <p key={index}>{index + 1}</p>
        ))}
      </div>
      <Textarea />
      <div className='main-content'>
        <h1 className="name">camille durthaller-renard</h1>
        <h2 className="role">web fullstack developer. french engineer.</h2>
        {projects.map((project, index) => (
          <div key={index} className="project">
            <a href={project.endpoint}>{project.name}</a>
            <div className="project-details">
              {project.deployed && <a href={project.deployed} target='_blank'>visit</a>}
              {project.github && <a href={project.github} target='_blank'>github</a>}
              <p>{project.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Page>
  )
}

export default Home