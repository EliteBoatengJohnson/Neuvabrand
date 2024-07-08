import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  margin: 1rem;
  width: 100%;
  max-width: 350px;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CardImage = styled.div`
  background-color: #99CC33;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  color: #99CC33;
  font-family: 'VARINONORMAL REGULAR', sans-serif;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  color: #333;
  font-family: 'Plutonian Thin', sans-serif;
  line-height: 1.5;
`;

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <Card>
      <CardImage>
        {imageUrl ? (
          <img src={imageUrl} alt={title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
        ) : (
          <span style={{ color: '#FFBE06', fontSize: '3rem' }}>NeuvuRah</span>
        )}
      </CardImage>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;