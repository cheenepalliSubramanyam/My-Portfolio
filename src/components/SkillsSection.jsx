import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Skills
  { name: "Python", category: "Skills" },
  { name: "SQL", category: "Skills" },
  { name: "Machine Learning", category: "Skills" },
  { name: "NLP", category: "Skills" },
  { name: "Statistics", category: "Skills" },
  { name: "HTML", category: "Skills" },
  { name: "CSS", category: "Skills" },
  { name: "DevOps", category: "Skills" },

  // Tools
  { name: "Git/GitHub", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Jupyter Notebook", category: "tools" },
];

const categories = ["Skills", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Skills");

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all hover:scale-105"
            >
              <h3 className="font-medium text-lg text-foreground">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
