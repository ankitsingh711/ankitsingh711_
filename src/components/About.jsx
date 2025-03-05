import { motion } from 'framer-motion';
import { CodeBracketIcon, CommandLineIcon, CpuChipIcon } from '@heroicons/react/24/outline';
import AnimatedAvatar from './AnimatedAvatar';
import ScrollAnimation from './ScrollAnimation/ScrollAnimation';
import SkillsGlobe from './3D/SkillsGlobe';
import TestimonialCard from './Testimonials/TestimonialCard';
import SkillCard from './Skills/SkillCard';
import TimelineItem from './Timeline/TimelineItem';
import ActivityDashboard from './RealTime/ActivityDashboard';

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

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90, color: 'bg-primary' },
        { name: 'TypeScript', level: 85, color: 'bg-primary/90' },
        { name: 'Next.js', level: 80, color: 'bg-primary/80' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 88, color: 'bg-primary' },
        { name: 'Express.js', level: 85, color: 'bg-primary/90' },
        { name: 'MongoDB', level: 82, color: 'bg-primary/80' }
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', level: 90, color: 'bg-primary' },
        { name: 'Docker', level: 75, color: 'bg-primary/90' },
        { name: 'AWS', level: 70, color: 'bg-primary/80' }
      ]
    }
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "Project Manager",
      company: "Tech Corp",
      content: "An exceptional developer who consistently delivers high-quality work. Their technical expertise and problem-solving abilities are outstanding.",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Jane Smith",
      role: "Tech Lead",
      company: "Innovation Labs",
      content: "A talented developer with great communication skills. They're always eager to learn and contribute meaningful solutions to complex problems.",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
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

          {/* Real-time Activity Dashboard - Moved here */}
          <ScrollAnimation>
            <section className="bg-white rounded-2xl p-8 shadow-sm">
              <ActivityDashboard />
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

          {/* Skills Section - Updated with SkillCard */}
          <ScrollAnimation direction="up">
            <section className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                  <SkillCard
                    key={index}
                    title={category.title}
                    skills={category.skills}
                  />
                ))}
              </div>
            </section>
          </ScrollAnimation>

          {/* Experience Section - Updated with TimelineItem */}
          <ScrollAnimation direction="left">
            <section className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <TimelineItem
                    key={index}
                    date={exp.period}
                    title={exp.title}
                    company={exp.company}
                    description={exp.description}
                    technologies={exp.technologies}
                    isLast={index === experiences.length - 1}
                  />
                ))}
              </div>
            </section>
          </ScrollAnimation>

          {/* Testimonials Section */}
          <ScrollAnimation>
            <section className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What People Say</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    {...testimonial}
                  />
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

          {/* Skills Globe */}
          <ScrollAnimation>
            <div className="h-[400px] w-full mb-12">
              <SkillsGlobe skills={skills} />
            </div>
          </ScrollAnimation>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 