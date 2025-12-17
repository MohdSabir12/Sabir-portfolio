import { GraduationCap, MapPin, CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">Academic Background</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Combining a commerce foundation with rigorous training in data science to turn data into actionable insights.
          </p>
        </motion.div>

        {/* Bachelor's in Commerce */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100 dark:border-gray-700 mb-8"
        >
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center shadow-lg">
              <GraduationCap size={28} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                Bachelor's in Commerce
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                University of Mumbai
              </p>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400 mt-3">
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} className="text-blue-500" />
                  <span>July 2015 – April 2018</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-blue-500" />
                  <span>Mumbai, India</span>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex flex-wrap gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">CGPA</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">6.9 / 10.0</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Degree</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">Bachelor's</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Key Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Financial Technology', 'Accounting', 'Audit'].map((course) => (
                    <span key={course} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs rounded-full">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Indian Institute of Technology, Madras - Data Science */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100 dark:border-gray-700"
        >
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center shadow-lg">
              <GraduationCap size={28} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                BS in Data Science and Applications
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                Indian Institute of Technology, Madras
              </p>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400 mt-3">
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} className="text-green-500" />
                  <span>2025 – Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-green-500" />
                  <span>Chennai, India</span>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex flex-wrap gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Degree</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">BS in Data Science & Applications (Pursuing)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Key Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Statistical Inference', 'Machine Learning', 'Data Analysis', 'Probability Theory', 'Linear Algebra', 'Data Visualization'].map((course) => (
                    <span key={course} className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-300 text-xs rounded-full">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EducationSection;
