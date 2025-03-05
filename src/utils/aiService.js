const AI_CONTEXT = {
  name: "Ankit Singh",
  role: "Full Stack Developer",
  skills: [
    "React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL",
    "TypeScript", "Next.js", "AWS", "Docker", "Git"
  ],
  experience: [
    {
      title: "Software Engineer",
      company: "Company Name",
      period: "2023 - Present",
      description: "Working on full-stack development using React.js, Node.js, and various modern technologies."
    }
    // Add more experiences
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://project1.com"
    }
    // Add more projects
  ],
  education: {
    degree: "Bachelor of Technology in Computer Science",
    school: "Your University Name",
    year: "2023"
  },
  contact: {
    email: "developerankit2127@gmail.com",
    linkedin: "linkedin.com/in/ankit-singh2127",
    github: "github.com/ankitsingh711"
  }
};

class AIService {
  constructor() {
    this.context = AI_CONTEXT;
  }

  async generateResponse(userInput) {
    const input = userInput.toLowerCase();
    
    // Basic intent recognition
    if (this.containsAny(input, ['hi', 'hello', 'hey'])) {
      return this.getGreeting();
    }
    
    if (this.containsAny(input, ['skills', 'technologies', 'tech stack'])) {
      return this.getSkillsResponse();
    }
    
    if (this.containsAny(input, ['experience', 'work', 'job'])) {
      return this.getExperienceResponse();
    }
    
    if (this.containsAny(input, ['project', 'portfolio'])) {
      return this.getProjectsResponse();
    }
    
    if (this.containsAny(input, ['education', 'study', 'degree'])) {
      return this.getEducationResponse();
    }
    
    if (this.containsAny(input, ['contact', 'email', 'reach'])) {
      return this.getContactResponse();
    }

    if (this.containsAny(input, ['resume', 'cv'])) {
      return "You can download Ankit's resume using the button in the navigation bar. It contains detailed information about his experience and skills.";
    }

    return this.getDefaultResponse();
  }

  containsAny(str, keywords) {
    return keywords.some(keyword => str.includes(keyword));
  }

  getGreeting() {
    const greetings = [
      `Hi! I'm Ankit's AI assistant. How can I help you today?`,
      `Hello! I'd be happy to tell you more about Ankit's work and experience.`,
      `Welcome! Feel free to ask me anything about Ankit's skills and projects.`
    ];
    return this.getRandomResponse(greetings);
  }

  getSkillsResponse() {
    return `Ankit is proficient in: ${this.context.skills.join(', ')}. Would you like to know more about any specific technology?`;
  }

  getExperienceResponse() {
    const exp = this.context.experience[0];
    return `Ankit is currently working as a ${exp.title} at ${exp.company} (${exp.period}). ${exp.description} Would you like to know more about his work experience?`;
  }

  getProjectsResponse() {
    const project = this.context.projects[0];
    return `One of Ankit's notable projects is ${project.title}: ${project.description} It was built using ${project.technologies.join(', ')}. Would you like to see more projects?`;
  }

  getEducationResponse() {
    const edu = this.context.education;
    return `Ankit has a ${edu.degree} from ${edu.school} (${edu.year}). Would you like to know more about his educational background?`;
  }

  getContactResponse() {
    return `You can reach Ankit at ${this.context.contact.email} or connect with him on LinkedIn at ${this.context.contact.linkedin}. Would you like his other contact information?`;
  }

  getDefaultResponse() {
    const responses = [
      "I'm not sure about that, but I'd be happy to tell you about Ankit's skills, projects, or experience.",
      "Could you rephrase that? I can help you learn about Ankit's work, education, or how to contact him.",
      "I might not have that information, but I can tell you about Ankit's technical expertise and achievements."
    ];
    return this.getRandomResponse(responses);
  }

  getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
  }
}

export default new AIService(); 