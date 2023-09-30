import React from 'react';

const AIMatching = () => {
  // placeholder for mentorship recommendations
  const mentorshipRecommendations = [
    {
      name: 'Mentor 1',
      expertise: 'Web Development',
      bio: 'Experienced web developer with a passion for open source.',
    },
    {
      name: 'Mentor 2',
      expertise: 'Machine Learning',
      bio: 'Machine learning enthusiast with a focus on natural language processing.',
    },
    // add more recommendations
  ];

  return (
    <div className="bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4 text-white">AI Matching</h2>
      {mentorshipRecommendations.map((mentor, index) => (
        <div
          key={index}
          className="bg-white bg-opacity-90 p-4 rounded-lg mb-4 shadow-md"
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{mentor.name}</h3>
          <p className="text-gray-700 mb-2">{mentor.expertise}</p>
          <p className="text-gray-700">{mentor.bio}</p>
          <button
            className="mt-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            Connect
          </button>
        </div>
      ))}
    </div>
  );
};

export default AIMatching;
