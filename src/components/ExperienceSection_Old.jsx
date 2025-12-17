import { Calendar, Award } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior Data Analyst',
      company: 'SS&C Technologies, Hyderabad - India',
      period: 'Mar 2023 -- Current',
      logo: '/public/ssc.png',
      technologies: ['Power BI', 'Ms SQL', 'Excel','Python', 'ETL', 'Data Modeling','SS&C Sightline','Adobe Acrobat'],
      achievements: [
        'Analyzed and managed large-scale financial datasets to support fund accounting, NAV reporting, risk analytics, and regulatory compliance',
        'Automated monthly, quarterly, and annual financial reporting using Python and SQL, reducing manual workload by 40%',
        'Developed ML-based predictive models to enhance risk scoring, anomaly detection, and reporting accuracy',
        'Designed interactive Power BI and Tableau dashboards to visualize fund KPIs, expense trends, cashflows, and risk metrics',
        'Built VBA tools and Python scripts for automated reconciliation, data validation, and performance reporting',
        'Optimized SQL queries and data workflows, improving data retrieval speed and reducing processing delays',
        'Supported client onboarding by building efficient data integration workflows and dynamic reporting templates',
        'Collaborated with compliance teams to streamline regulatory filings and improve turnaround times for quarterly and year-end reports',
        'Reduced the financial reporting cycle from 4 days to 1.5 days through Python-based automation',
        'Improved data accuracy by 30% using optimized SQL pipelines and validation scripts',
        'Automated 20+ manual workflows, saving over 100 hours per month across teams'
      ]
    },
    {
      title: 'Data Analyst -- Senior Data Analyst',
      company: 'Morningstar India, Navi Mumbai - India',
      period: 'Jan 2019 -- Mar 2023',
      logo: '/public/morningstar.png',
      technologies: ['Power BI', 'Ms SQL', 'Excel','Python', 'ETL', 'Data Modeling'],
      achievements: [
        'Managed and processed large financial datasets to deliver actionable investment analytics and procurement insights',
        'Performed statistical analysis, time-series modeling, and financial data validation using SQL and Excel',
        'Built interactive dashboards for KPI tracking, performance trends, and procurement insights',
        'Collaborated with DevOps teams to enhance internal data pipelines and optimize data storage systems',
        'Conducted ad-hoc analyses to support senior stakeholders in data-driven decision-making',
        'Led initiatives to improve data accuracy, consistency, and process efficiency',
        'Implemented a Procurement Business Intelligence system adopted department-wide',
        'Reduced manual reporting efforts by 30% using VBA automation',
        'Improved data accessibility by optimizing storage and retrieval processes'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Database & SQL for Data Science',
      issuer: 'IBM',
      date: '2020',
      skills: ['SQL', 'Databases', 'Stored Procedures']
    },
    {
      name: 'Python',
      issuer: '365DataScience',
      date: '2024',
      skills: ['Python', 'Pandas', 'Numpy']
    },
    {
      name: 'Statistics',
      issuer: '365DataScience',
      date: '2024',
      skills: ['Descriptive Statistics', 'Inferential Statistics', 'Probability']
    },
    {
      name: 'Data Scientist',
      issuer: '365DataScience',
      date: 'Pursuing',
      skills: ['Data Science', 'Machine Learning', 'Maths','AI']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">Professional Experience</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">Work Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                  
                  {/* Logo + Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                    <div className="flex items-start gap-4">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-10 h-10 object-contain rounded-md bg-white shadow-sm"
                      />
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white">{exp.title}</h4>
                        <p className="text-blue-700 dark:text-blue-400 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full self-start">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Award className="text-blue-600 dark:text-blue-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">{cert.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cert.issuer} • {cert.date}</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span key={skill} className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
