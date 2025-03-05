import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaClock, FaFire } from 'react-icons/fa';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';

const ActivityDashboard = () => {
  const [githubActivity, setGithubActivity] = useState([]);
  const [codingStats, setCodingStats] = useState({
    totalHours: 0,
    commits: 0,
    streak: 0,
    topLanguage: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubActivity = async () => {
      try {
        // Replace with your GitHub username
        const username = 'ankitsingh711';
        const response = await fetch(`https://api.github.com/users/${username}/events`);
        const data = await response.json();
        setGithubActivity(data.slice(0, 5));
      } catch (error) {
        console.error('Error fetching GitHub activity:', error);
      }
    };

    fetchGithubActivity();
    // Fetch every 5 minutes
    const interval = setInterval(fetchGithubActivity, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Simulate fetching coding statistics
    // In a real app, you'd fetch this from your backend or a service like WakaTime
    const fetchCodingStats = async () => {
      setLoading(true);
      try {
        // Simulated data - replace with real API calls
        setCodingStats({
          totalHours: 120,
          commits: 450,
          streak: 15,
          topLanguage: 'JavaScript'
        });
      } catch (error) {
        console.error('Error fetching coding stats:', error);
      }
      setLoading(false);
    };

    fetchCodingStats();
  }, []);

  return (
    <div>
      <ScrollAnimation>
        <h2 className="text-3xl font-display font-bold text-center mb-12 bg-gradient-primary text-transparent bg-clip-text">
          My Activity Dashboard
        </h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8">
        {/* GitHub Activity Feed */}
        <ScrollAnimation delay={0.2}>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <FaGithub className="text-2xl text-gray-700" />
              <h3 className="text-xl font-semibold text-gray-900">Recent GitHub Activity</h3>
            </div>
            {githubActivity.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 py-3 border-b last:border-0"
              >
                <div className="p-2 bg-primary-50 rounded-lg">
                  <FaCode className="text-primary-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">{activity.type.replace('Event', '')}</p>
                  <p className="text-sm text-gray-500">
                    {activity.repo.name} - {new Date(activity.created_at).toLocaleDateString()}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Coding Statistics */}
        <ScrollAnimation delay={0.4}>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-2 mb-6">
              <FaClock className="text-2xl text-gray-700" />
              <h3 className="text-xl font-semibold text-gray-900">Coding Statistics</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-gray-600">Total Hours</p>
                <p className="text-2xl font-semibold text-primary-600">{codingStats.totalHours}h</p>
              </div>
              <div className="p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-gray-600">Total Commits</p>
                <p className="text-2xl font-semibold text-primary-600">{codingStats.commits}</p>
              </div>
              <div className="p-4 bg-primary-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <FaFire className="text-amber-500" />
                  <p className="text-sm text-gray-600">Streak</p>
                </div>
                <p className="text-2xl font-semibold text-primary-600">{codingStats.streak} days</p>
              </div>
              <div className="p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-gray-600">Top Language</p>
                <p className="text-2xl font-semibold text-primary-600">{codingStats.topLanguage}</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Skill Progress Bars */}
      <ScrollAnimation delay={0.6}>
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Technology Usage</h3>
          <div className="space-y-4">
            {[
              { name: 'JavaScript', progress: 85 },
              { name: 'React', progress: 78 },
              { name: 'Node.js', progress: 72 },
              { name: 'TypeScript', progress: 65 },
              { name: 'MongoDB', progress: 70 }
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">{skill.name}</span>
                  <span className="text-gray-500">{skill.progress}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default ActivityDashboard; 