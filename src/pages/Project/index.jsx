import React from 'react'
import { useParams } from 'react-router-dom'

import Page from '../../templates/Page'
import { getContentByProjectEndpoint } from '../../data/contents'
import { projects } from '../../data/projects'

const Project = () => {
  const { project: projectEndpoint } = useParams()
  const { title, content } = getContentByProjectEndpoint(projectEndpoint)
  const additionalDetails = projects.find(project => project.endpoint === '/' + projectEndpoint)

  return (
    <Page>
      <div className="project-page container">
        <a href='/' className="project-page back-link">home</a>
        {additionalDetails && <h2 className="project-page date">{additionalDetails.date}</h2>}
        <h1 className="project-page">{title}</h1>
        <div className="project-page content" dangerouslySetInnerHTML={{ __html: content }} />
        {additionalDetails && (
          <div className="project-page additional-details">
            {additionalDetails.deployed && <a href={additionalDetails.deployed} target='_blank'>visit online</a>}
            {additionalDetails.github && <a href={additionalDetails.github} target='_blank'>see the github repository</a>}
          </div>
        )}
      </div>
    </Page>
  )
}

export default Project