import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const MenNavbar = () => {
  const navbarLinks = [
    { path: '/mentor', title: 'Profile Page' },
    { path: '/mentorship_requests', title: 'Mentorship Requests' },
    { path: '/mentorship_history', title: 'Mentorship History' },
    { path: '/create_new_meeting', title: 'Create New Meeting' },
    { path: '/mentorship_progress_tracking', title: 'Mentorship Progress Tracking' },
    { path: '/feedback_and_ratings', title: 'Feedback and Ratings' },
    { path: '/notifications', title: 'Notifications' },
    { path: '/mentorship_tips_and_resources', title: 'Mentorship Tips and Resources' },
  ];

  return (
    <div>
    <nav className="bg-green-500 py-4 px-8">
    <div className="flex items-center justify-between">
      <div className="space-x-4">
        {navbarLinks.map((link) => (
          <Link key={link.path} to={link.path} className="text-white hover:underline">
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  </nav>
  </div>
  );
};

export default MenNavbar;