import React from 'react';
import { Column, Tag } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import './ProjectCardD.scss';
import { AspectRatio } from 'carbon-components-react';

const ProjectCardD = ({ title, description, imageSrc, link, tags }) => {
  return (
    <Column sm={4} md={4} lg={8} className="project-card">
      <a href={link} className="project-card__link">
        <div className="project-card__content">
          <div className="project-card__text">
            <h3>{title}</h3>
            <p>{description}</p>
            {Array.isArray(tags) && tags.length > 0 && (
              <div className="project-card__tags">
                {tags.map((tag, index) => (
                  <Tag key={index} type="blue" size="md">
                    {tag}
                  </Tag>
                ))}
              </div>
            )}
            <div className="project-card__view">
              <ArrowRight size={16} />
            </div>
          </div>
          {/* <div className="project-card__image-container"> */}
            <AspectRatio ratio="1x1" className="project-card__image-container_d" >
              <img src={imageSrc} alt={title} className="project-card__image" />
            </AspectRatio>
          {/* </div> */}

        </div>
      </a>
    </Column>
  );
};

ProjectCardD.defaultProps = {
  tags: [],
};

export default ProjectCardD;