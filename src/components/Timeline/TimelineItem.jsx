import { motion } from 'framer-motion';

const TimelineItem = ({ date, title, company, description, isLeft }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`w-full md:w-1/2 ${isLeft ? 'md:text-right' : ''}`}
      >
        <span className="text-primary font-medium">{date}</span>
        <h3 className="text-xl font-semibold text-gray-900 mt-1">{title}</h3>
        <p className="text-gray-600 font-medium">{company}</p>
        <p className="text-gray-600 mt-2">{description}</p>
      </motion.div>
      <div className="hidden md:block w-px h-full bg-primary relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
      </div>
      {!isLeft && <div className="w-full md:w-1/2" />}
    </div>
  );
};

export default TimelineItem; 