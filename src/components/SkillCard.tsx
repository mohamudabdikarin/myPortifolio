import React from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, skills }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;