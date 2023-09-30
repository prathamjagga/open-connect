import React, { useState } from 'react';

const ExplorePage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedSort, setSelectedSort] = useState('MostRecentlyUpdated');
  const [searchTerm, setSearchTerm] = useState('');

  const contributorsData = [
    {
      repoName: 'react-project',
      description: 'A collection of React components for your projects.',
      rating: 4.5,
      starterIssues: 12,
      newContributors: 'Last committed recently',
    },
    {
      repoName: 'open-source-contributions',
      description: 'A community-driven project to encourage open source contributions.',
      rating: 4.2,
      starterIssues: 5,
      newContributors: 'Last committed recently',
    },
  ];

  const creatorsData = [
    {
      repoName: 'creative-web-designs',
      description: 'A showcase of creative and inspiring web designs from around the world.',
      rating: 4.8,
      published: 'Published 2 weeks ago',
      feedback: 'Feedback welcome',
    },
    {
      repoName: 'coding-challenges',
      description: 'A collection of coding challenges and solutions in various programming languages.',
      rating: 4.6,
      published: 'Published 3 months ago',
      newContributors: 'New contributors welcome',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-600 p-8">
      <h2 className="text-4xl font-bold text-white mb-8">Explore</h2>

      <div className="mb-4">
        <label className="text-white">Choose a Language:</label>
        <select
          className="px-4 py-2 border rounded-lg bg-white text-gray-800"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="All">All</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="text-white">Add Topic:</label>
        <select
          className="px-4 py-2 border rounded-lg bg-white text-gray-800"
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Web Development">Web Development</option>
          <option value="Open Source">Open Source</option>
          <option value="Data Science">Data Science</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="text-white">Sort by:</label>
        <select
          className="px-4 py-2 border rounded-lg bg-white text-gray-800"
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
        >
          <option value="MostRecentlyUpdated">Most recently updated</option>
          <option value="MostStars">Most stars</option>
          <option value="MostStarterIssues">Most starter issues</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="text-white">Search Term:</label>
        <input
          type="text"
          className="px-4 py-2 border rounded-lg bg-white text-gray-800"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white mb-4">Contributors</h3>
        {contributorsData.map((data, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4 mb-4 transition-transform transform hover:scale-105">
            <h4 className="text-xl font-semibold text-gray-800">{data.repoName}</h4>
            <p className="text-gray-600">{data.description}</p>
            <div className="flex items-center text-yellow-500">
              <svg className="w-4 h-4 fill-current mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 15.293a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L8 12.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3z"/>
              </svg>
              {data.rating}
            </div>
            <p className="text-gray-600">{data.starterIssues} starter issues</p>
            <p className="text-gray-600">{data.newContributors}</p>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-white mb-4">Creators</h3>
        {creatorsData.map((data, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4 mb-4 transition-transform transform hover:scale-105">
            <h4 className="text-xl font-semibold text-gray-800">{data.repoName}</h4>
            <p className="text-gray-600">{data.description}</p>
            <p className="text-gray-600">{data.published}</p>
            <p className="text-green-500">{data.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
