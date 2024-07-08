import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ShowcaseContainer = styled.div`
  padding: 2rem;
  background-color: #f5f5f5;
`;

const Title = styled.h2`
  color: #99CC33;
  font-family: 'VARINONORMAL REGULAR', sans-serif;
  text-align: center;
  margin-bottom: 2rem;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const ProjectShowcase = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Solar Panel Installation', 
      description: 'Large-scale solar panel installation for commercial buildings, providing clean and renewable energy solutions.',
      imageUrl: 'path/to/solar-panel-image.jpg'
    },
    { 
      id: 2, 
      title: 'Wind Turbine Farm', 
      description: 'Development of a wind turbine farm for clean energy production, harnessing the power of wind for sustainable electricity.',
      imageUrl: 'path/to/wind-turbine-image.jpg'
    },
    { 
      id: 3, 
      title: 'Smart Grid Implementation', 
      description: 'Implementation of smart grid technology for efficient energy distribution, optimizing power usage and reducing waste.',
      imageUrl: 'src/images'
    },
  ];

  return (
    <ShowcaseContainer>
      <Title>Our Projects</Title>
      <CardGrid>
        {projects.map(project => (
          <Card 
            key={project.id} 
            title={project.title} 
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </CardGrid>
    </ShowcaseContainer>
  );
};

export default ProjectShowcase;