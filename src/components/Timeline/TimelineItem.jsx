import { motion } from 'framer-motion';

const TimelineItem = ({ date, title, company, description, technologies, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="relative pl-8 pb-8"
    >
      {!isLast && (
        <div className="absolute left-0 top-2 h-full w-0.5 bg-primary/20" />
      )}
      <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary" />
      
      <div className="space-y-2">
        <span className="text-sm text-primary font-medium">{date}</span>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-primary/80 font-medium">{company}</p>
        <p className="text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem; 