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
    <div className="bg-gray-100 p-4">
      <h2 className="text-3xl font-semibold mb-4">Explore</h2>

      <div className="mb-4">
        <label className="text-gray-700">Choose a Language:</label>
        <select
          className="px-3 py-2 border rounded-lg"
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
        <label className="text-gray-700">Add Topic:</label>
        <select
          className="px-3 py-2 border rounded-lg"
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
        <label className="text-gray-700">Sort by:</label>
        <select
          className="px-3 py-2 border rounded-lg"
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
        >
          <option value="MostRecentlyUpdated">Most recently updated</option>
          <option value="MostStars">Most stars</option>
          <option value="MostStarterIssues">Most starter issues</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="text-gray-700">Search Term:</label>
        <input
          type="text"
          className="px-3 py-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Contributors</h3>
        {contributorsData.map((data, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4 mb-4">
            <h4 className="text-xl font-semibold">{data.repoName}</h4>
            <p className="text-gray-600">{data.description}</p>
            <p className="text-gray-600">Rating: {data.rating}</p>
            <p className="text-gray-600">{data.starterIssues} starter issues</p>
            <p className="text-gray-600">{data.newContributors}</p>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Creators</h3>
        {creatorsData.map((data, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4 mb-4">
            <h4 className="text-xl font-semibold">{data.repoName}</h4>
            <p className="text-gray-600">{data.description}</p>
            <p className="text-gray-600">{data.published}</p>
            <p className="text-gray-600">{data.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
