import React, { Component } from 'react';
import { resume } from '../Resources/personalInfo';

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Resume = () => {
  const { skillmessage, education, work, skills } = resume;

  const educationSection = education.map(section => {
    return (
      <div key={section.school}>
        <h3>{section.school}</h3>
        <p className='info'>
          {section.degree} <span>&bull;</span>
          <em className='date'>{section.graduated}</em>
        </p>
        <p>{section.description}</p>
      </div>
    );
  });

  const workSection = work.map(job => {
    return (
      <div key={job.company}>
        <h3>{job.company}</h3>
        <p className='info'>
          {job.title}
          <span>&bull;</span> <em className='date'>{job.years}</em>
        </p>
        <p>{job.description}</p>
      </div>
    );
  });

  const skillsSection = skills.map(skill => {
    var className = 'bar-expand ' + skill.name.toLowerCase();
    return (
      <li key={skill.name}>
        <span
          style={{
            width: skill.level,
            backgroundColor: getRandomColor(),
          }}
          className={className}
        ></span>
        <em>{skill.name}</em>
      </li>
    );
  });

  return (
    <section id='resume'>
      <div className='row education'>
        <div className='three columns header-col'>
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className='nine columns main-col'>
          <div className='row item'>
            <div className='twelve columns'>{educationSection}</div>
          </div>
        </div>
      </div>

      <div className='row work'>
        <div className='three columns header-col'>
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className='nine columns main-col'>{workSection}</div>
      </div>

      <div className='row skill'>
        <div className='three columns header-col'>
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className='nine columns main-col'>
          <p>{skillmessage}</p>

          <div className='bars'>
            <ul className='skills'>{skillsSection}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
