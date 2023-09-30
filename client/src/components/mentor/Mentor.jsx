import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import MenNavbar from './MenNavbar';
import Navbar from '../Navbar';


const Mentor = () => {
  const meetingsAttended = [
    { id: 1, date: '2023-09-25', topic: 'Introduction to Open Source' },
    { id: 2, date: '2023-09-26', topic: 'Git/GitHub Basics' },
  ];
  const [isAvailable, setIsAvailable] = useState(false);

  const matchedSkills = ['JavaScript', 'React.js', 'Node.js', 'Python', 'Express.js'];

  const lecturesConducted = [
    { id: 1, date: '2023-06-15', topic: 'Introduction to Open Source' },
    { id: 2, date: '2023-06-22', topic: 'How to get into Open-Source' },
  ];

  const peopleMatched = 20;
  const peopleMentored = 12;
  const [availability, setAvailability] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });
  const handleAvailabilityChange = (day, time) => {
    setAvailability((prevAvailability) => ({
      ...prevAvailability,
      [day]: prevAvailability[day].includes(time)
        ? prevAvailability[day].filter((t) => t !== time)
        : [...prevAvailability[day], time],
    }));
  };
  const additionalFeatures = [
    {
      link:'/mentor',
      title: 'Profile Page',
      description: 'View and update personal information, contact details, and bio.',
    },
    {
      link: '/mentorship_requests',
      title: 'Mentorship Requests',
      description: 'Manage incoming mentorship requests from mentees.',
    },
    {
      link: '/mentorship_history',
      title: 'Mentorship History',
      description: 'View past mentorship engagements with previous mentees and topics covered.',
    },
    {
      link: '/create_new_meeting',
      title: 'Create New Meeting',
      description: 'Schedule new meetings with mentees, setting date, time, and topic.',
    },
    {
      link: '/mentorship_progress_tracking',
      title: 'Mentorship Progress Tracking',
      description: 'Track mentees\' progress on skills development and completed assignments.',
    },
    {
      link: '/feedback_and_ratings',
      title: 'Feedback and Ratings',
      description: 'Receive feedback and ratings from mentees on mentorship experiences.',
    },
    {
      link: '/notifications',
      title: 'Notifications',
      description: 'Receive updates on new mentorship requests and upcoming meetings.',
    },
    {
      link: '/mentorship_tips_and_resources',
      title: 'Mentorship Tips and Resources',
      description: 'Access mentorship tips, best practices, and resources for improving mentoring skills.',
    },
  ];  

  return (
    <>
    <Navbar/>
    <div className='p-4'>
    <MenNavbar/>

    <div className="p-10 min-h-screen bg-green-100">
      <div className="py-12 px-4 text-center">
        <div className="container mx-auto">
            <div align='center'>
              {/* <img src={UserImg} alt='profile' /> */}
              <h2 className="text-2xl font-semibold text-black mb-4">Welcome, User!</h2>
              <p className="text-lg text-gray-800 mt-2">abc@gmail.com</p>
              <div className="flex justify-center space-x-4"></div>
              
            </div>
        </div>
        <div>
          <div className='flex py-3'>
            <hr className="w-1/4 h-1 bg-gradient-to-r from-green-400 to-lightGreen-500" />
          </div>
          <div align='right'>
            <hr className="w-1/4 h-1 bg-gradient-to-l from-green-400 to-lightGreen-500 self-end" />
          </div>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8"
        >
          Mentor Dashboard
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-4">Meetings Attended</h2>
            {meetingsAttended.map((meeting) => (
              <div key={meeting.id} className="mb-2">
                <p className="text-sm text-gray-600">{meeting.date}</p>
                <p>{meeting.topic}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-4">Matched Skills</h2>
            <div className="flex flex-wrap">
              {matchedSkills.map((skill) => (
                <span key={skill} className="bg-green-500 text-white px-3 py-1 rounded-lg mr-2 mb-2">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer "
          >
            <h2 className="text-xl font-semibold mb-4">Upcoming Meetings</h2>
            {lecturesConducted.map((lecture) => (
              <div key={lecture.id} className="mb-2">
                <p className="text-sm text-gray-600">{lecture.date}</p>
                <p>{lecture.topic}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-4">Mentees Matched</h2>
            <p className="text-3xl font-bold">{peopleMatched}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-4">Mentees Mentored</h2>
            <p className="text-3xl font-bold">{peopleMentored}</p>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-green-500"
                checked={isAvailable}
                onChange={() => setIsAvailable(!isAvailable)}
              />
              <span className="text-lg text-gray-800">Available for Mentorship</span>
            </label>
          </div>
          <div className="grid grid-cols-8 gap-2 mt-8">
            <div></div>
            {/* <div className="font-semibold">Mon</div>
            <div className="font-semibold">Tue</div>
            <div className="font-semibold">Wed</div>
            <div className="font-semibold">Thu</div>
            <div className="font-semibold">Fri</div>
            <div className="font-semibold">Sat</div>
            <div className="font-semibold">Sun</div> */}

            {Object.keys(availability).map((day) => (
              <React.Fragment key={day}>
                <div className="font-semibold">{day}</div>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((time) => (
                  <div key={time}>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-green-500"
                        checked={availability[day].includes(time)}
                        onChange={() => handleAvailabilityChange(day, time)}
                      />
                      <span>{`${time}:00 - ${time + 1}:00`}</span>
                    </label>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {additionalFeatures.map((feature) => (
            <Card key={feature.title} title={feature.title} description={feature.description} link={feature.link}/>
          ))}
        </div>
    </div>
    </div>
    </>
  );
};

export default Mentor;