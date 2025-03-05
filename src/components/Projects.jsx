import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation/ScrollAnimation';
import ProjectShowcase3D from './3D/ProjectShowcase3D';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaCube } from 'react-icons/fa';
import stylerImage from '../assets/styler.png';
import smileslotImage from '../assets/smileslot.png';
const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Styler - Barber Booking',
      description: 'A full-stack online barber booking platform where users can book appointments with barbers.',
      image: stylerImage,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'Full Stack',
      liveUrl: 'https://styller.netlify.app/index.html',
      githubUrl: 'https://github.com/shanukajain/Styler',
      featured: true
    },
    {
      id: 2,
      title: 'Smileslot - Barber Booking',
      description: 'A full-stack online barber booking platform where users can book appointments with barbers.',
      image: smileslotImage,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'Full Stack',
      liveUrl: 'https://smileslot.netlify.app/',
      githubUrl: 'https://github.com/anonymous10062002/SmileSlot',
      featured: true
    }
    // Add more projects here
  ]);

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [view3D, setView3D] = useState(false);

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile'];

  useEffect(() => {
    filterProjects(activeFilter, searchQuery);
  }, [activeFilter, searchQuery]);

  const filterProjects = (category, query) => {
    let filtered = [...projects];
    
    // Apply category filter
    if (category !== 'All') {
      filtered = filtered.filter(project => project.category === category);
    }
    
    // Apply search filter
    if (query) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(query.toLowerCase())
        )
      );
    }

    setFilteredProjects(filtered);
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-gray-900 text-center">
              My Projects
            </h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setView3D(!view3D)}
              className="px-4 py-2 bg-gradient-primary text-white rounded-md flex items-center gap-2"
            >
              <FaCube />
              {view3D ? '2D View' : '3D View'}
            </motion.button>
          </div>
        </ScrollAnimation>

        {view3D ? (
          <div className="h-[600px] w-full">
            <ProjectShowcase3D 
              projects={filteredProjects}
              onProjectClick={(project) => {
                // Handle project click
                window.open(project.liveUrl, '_blank');
              }}
            />
          </div>
        ) : (
          <div className="mb-12">
            <ScrollAnimation direction="down" className="space-y-6">
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-full ${
                      activeFilter === category
                        ? 'bg-gradient-primary text-white shadow-glow'
                        : 'bg-white text-gray-600 hover:bg-gradient-primary hover:text-white'
                    } transition-all duration-300`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        )}

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 py-12"
          >
            No projects found matching your criteria.
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 0.2} direction="up">
                <ProjectCard project={project} />
              </ScrollAnimation>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden group">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300"
          animate={{ scale: isHovered ? 1.1 : 1 }}
        />
        <motion.div 
          className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full text-primary hover:bg-gray-100 transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full text-primary hover:bg-gray-100 transition-colors"
          >
            <FaExternalLinkAlt className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
          {project.featured && (
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
              Featured
            </span>
          )}
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects; 