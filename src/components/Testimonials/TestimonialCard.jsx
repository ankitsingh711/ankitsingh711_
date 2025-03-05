import { motion } from 'framer-motion';

const TestimonialCard = ({ name, role, company, content, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{role} at {company}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">{content}</p>
    </motion.div>
  );
};

export default TestimonialCard; 