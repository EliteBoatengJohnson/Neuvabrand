import React from 'react';

const ProjectShowcase = () => {
  const projects = [
    { id: 1, name: 'Solar Panel Installation', description: 'Large-scale solar panel installation for commercial buildings.' },
    { id: 2, name: 'Wind Turbine Farm', description: 'Development of a wind turbine farm for clean energy production.' },
    { id: 3, name: 'Smart Grid Implementation', description: 'Implementation of smart grid technology for efficient energy distribution.' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ color: '#99CC33' }}>Our Projects</h2>
      {projects.map(project => (
        <div key={project.id} style={{ marginBottom: '1rem', border: '1px solid #99CC33', padding: '1rem' }}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectShowcase;