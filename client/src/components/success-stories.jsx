import React from 'react';

const SuccessStories = () => {
  const successStories = [
    {
      name: 'Amanda',
      story: 'I started my open-source journey in college and it led to a fulfilling career. My first pull request was fixing a minor bug in a popular open-source library. It felt incredible to see my code merged into the project!',
    },
    {
      name: 'Sam',
      story: 'I learned the importance of open-source contributions early on. My journey began with submitting my first pull request to a small project. It was a simple documentation update but it marked the beginning of my love for open source.',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4 text-white">Success Stories</h2>
      {successStories.map((story, index) => (
        <div
          key={index}
          className="bg-white bg-opacity-90 p-4 rounded-lg mb-4 shadow-md"
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{story.name}</h3>
          <p className="text-gray-700">{story.story}</p>
        </div>
      ))}
    </div>
  );
};

export default SuccessStories;
