import React from "react";
import { Database, Server, Users, FileCode, Brain } from "lucide-react";

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg">
    <div className="flex items-center gap-2 mb-4">
      <Icon className="text-purple-600" size={24} />
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: FileCode,
      skills: ["JavaScript", "React", "Redux", "HTML", "CSS"],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Express", "Flask", "SQLAlchemy", "Sequelize"],
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      skills: ["PostgreSQL", "SQLite3", "AWS"],
    },
    {
      title: "Professional Skills",
      icon: Brain,
      skills: ["Agile", "Project Management", "Process Optimization"],
    },
    {
      title: "Collaboration",
      icon: Users,
      skills: ["Documentation", "Business Requirements", "Team Collaboration"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="skills-section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional
            capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
