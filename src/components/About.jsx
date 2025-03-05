import { motion } from 'framer-motion';
import { CodeBracketIcon, CommandLineIcon, CpuChipIcon } from '@heroicons/react/24/outline';
import AnimatedAvatar from './AnimatedAvatar';
import ScrollAnimation from './ScrollAnimation/ScrollAnimation';

const About = () => {
  const skills = [
    'JavaScript', 'React.js', 'Node.js', 'Express.js',
    'MongoDB', 'PostgreSQL', 'TypeScript', 'Next.js',
    'Redux', 'Git', 'AWS', 'Docker',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI'
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "Company Name",
      period: "2023 - Present",
      description: "Working on full-stack development using React.js, Node.js, and various modern technologies. Leading team projects and implementing new features.",
      technologies: ["React.js", "Node.js", "MongoDB", "AWS"]
    },
    // Add more experiences as needed
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Your University Name",
      period: "2019 - 2023",
      description: "Graduated with honors. Focused on software engineering and web development."
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      name: "MongoDB Developer Certification",
      issuer: "MongoDB University",
      year: "2023"
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="space-y-12">
          {/* Hero Section */}
          <ScrollAnimation>
            <section className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <motion.h1 
                    className="text-4xl font-bold text-gray-900"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    About Me
                  </motion.h1>
                  <motion.p 
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    I'm a passionate Full Stack Developer with expertise in building modern web applications. 
                    With a strong foundation in both frontend and backend development, I create efficient, 
                    scalable, and user-friendly solutions that solve real-world problems.
                  </motion.p>
                  <motion.p 
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    I enjoy working with cutting-edge technologies and am always eager to learn and adapt 
                    to new challenges in the ever-evolving tech landscape.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <AnimatedAvatar className="w-full max-w-md mx-auto" variant="about" />
                </motion.div>
              </div>
            </section>
          </ScrollAnimation>

          {/* Core Competencies */}
          <section className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: CodeBracketIcon, title: "Frontend Development" },
              { Icon: CommandLineIcon, title: "Backend Development" },
              { Icon: CpuChipIcon, title: "System Architecture" }
            ].map((item, index) => (
              <ScrollAnimation key={item.title} delay={index * 0.2}>
                <motion.div className="bg-white p-6 rounded-xl shadow-sm">
                  <item.Icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">
                    {item.title === "Frontend Development" ? "Crafting responsive and intuitive user interfaces using modern frameworks and best practices." :
                    item.title === "Backend Development" ? "Building robust server-side applications with focus on performance and scalability." :
                    "Designing and implementing efficient, scalable system architectures."}
                  </p>
                </motion.div>
              </ScrollAnimation>
            ))}
          </section>

          {/* Skills Section */}
          <ScrollAnimation direction="up">
            <section className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <ScrollAnimation key={skill} delay={index * 0.1} direction="scale">
                    <motion.div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </motion.div>
                  </ScrollAnimation>
                ))}
              </div>
            </section>
          </ScrollAnimation>

          {/* Experience Section */}
          <ScrollAnimation direction="left">
            <section className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-4 border-primary pl-4 space-y-2"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-gray-500">{exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </ScrollAnimation>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimation direction="left">
              <motion.section className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.school}</p>
                    <p className="text-gray-500">{edu.period}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                ))}
              </motion.section>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <motion.section className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h2>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                        <p className="text-gray-600">{cert.issuer}</p>
                      </div>
                      <span className="text-gray-500">{cert.year}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            </ScrollAnimation>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 