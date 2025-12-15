import { BarChart3, Database, Brain, Code, Users } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      category: 'Data Analysis',
      items: ['SQL', 'Python', 'Statistical Analysis', 'ETL Processes','EDA','Performance Analysis','Risk Analytics'],
      icon: BarChart3
    },
    
    {//tyui

      category: 'Business Intelligence',
      items: ['Power BI', 'Tableau', 'Dashboard Development', 'KPI Tracking','Data Validation','Dashboard Reporting','Factsheet Reporting'],
      icon: Database
    },
    {
      category: 'Machine Learning',
      items: ['Predictive Modeling', 'Regression Analysis', 'Feature Engineering', 'Scikit-learn','Time-Series Analysis'],
      icon: Brain
    },
    {
      category: 'Data Support Tools',
      items: ['Microsoft Excel', 'Google Sheets', 'Google Colab', 'Jupyter', 'Git'],
      icon: Code
    },
    {
    category: 'Professional Skills',
    items: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management','Attention to Detail'],
    icon: Users
  }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">Professional Profile</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white border-l-4 border-blue-600 pl-4">About Me</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a results-driven Data Analyst with a passion for turning raw data into actionable insights.
              With a solid foundation in statistics and hands-on experience in data analytics, I help businesses make smarter,
              data-backed decisions that improve efficiency and drive growth.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My work blends technical expertise with business understanding, allowing me to bridge the gap between data and strategy.
              I have delivered analytics solutions across diverse sectors—including edtech, healthcare, quick-commerce, transportation,
              and retail—consistently creating measurable impact.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
             Curious and committed to continuous learning, I enjoy exploring new tools, techniques, and approaches to solve real-world problems.
             I thrive on turning complex data into clear, meaningful insights that support better decision-making and sustainable business success.
            </p>
            
            <div className="pt-4">
              <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-3">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Visualization', 'Business Analytics', 'Predictive Modeling',
                  'Data Analytics', 'Dashboard Development', 'Statistical Analysis',
                  'Requirements Gathering', 'Stakeholder Management'
                ].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {skills.map(({ category, items, icon: Icon }) => (
              <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Icon className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium shadow-xs border border-gray-200 dark:border-gray-600">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
