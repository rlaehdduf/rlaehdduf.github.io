import React, { useState } from 'react';

// ===== Types =====
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  devPeriod?: string;
  demoUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  isHovered?: boolean;
  onHover?: (id: string) => void;
  onLeave?: () => void;
}

// ===== Project Card Component =====
const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isHovered = false,
  onHover,
  onLeave,
}) => {
  return (
    <div
      className={`
        group relative
        bg-[#111827] 
        border border-[#1F2937]
        rounded-xl
        overflow-hidden
        transition-all duration-200 ease-out
        ${isHovered ? 'border-[#22D3EE] -translate-y-0.5 opacity-100' : 'opacity-60'}
        hover:border-[#22D3EE]
        hover:-translate-y-0.5
        hover:opacity-100
      `}
      onMouseEnter={() => onHover?.(project.id)}
      onMouseLeave={() => onLeave?.()}
    >
      {/* Thumbnail with Overlay */}
      <div className="relative w-full h-[180px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay - disappears on hover */}
        <div 
          className="
            absolute inset-0 
            bg-black/35
            transition-opacity duration-200
            group-hover:bg-black/0
          "
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-[#E5E7EB] font-semibold text-lg mb-2 font-['Pretendard']">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#9CA3AF] text-sm mb-3 line-clamp-2 font-['Pretendard']">
          {project.description}
        </p>

        {/* Dev Period */}
        {project.devPeriod && (
          <p className="text-[#9CA3AF] text-xs mb-3 font-['Pretendard']">
            📅 {project.devPeriod}
          </p>
        )}

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                px-2.5 py-1
                bg-[#9333EA]/10
                border border-[#9333EA]/30
                text-[#C084FC]
                text-xs
                rounded-md
                font-['JetBrains_Mono']
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project Button */}
        <a
          href={project.demoUrl || project.githubUrl || '#'}
          className="
            inline-flex items-center justify-center
            w-full
            px-4 py-2.5
            bg-[#22D3EE]
            text-[#0D0D0E]
            font-semibold
            text-sm
            rounded-lg
            transition-all duration-200
            hover:bg-[#22D3EE]/90
            hover:shadow-[0_0_12px_rgba(34,211,238,0.25)]
            font-['Pretendard']
          "
        >
          View Project
        </a>
      </div>
    </div>
  );
};

// ===== Project Grid Container =====
interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div 
      className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4
        gap-6
        p-6
        bg-[#0D0D0E]
      "
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          isHovered={hoveredId === project.id}
          onHover={setHoveredId}
          onLeave={() => setHoveredId(null)}
        />
      ))}
    </div>
  );
};

// ===== Sample Usage =====
const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'DefenceGame',
    description: '타워 디펜스 게임. 4 종 타워 배치, 레벨업, 특수 능력 해금 시스템.',
    image: '/images/defencegame.png',
    technologies: ['Unity', 'C#', 'Tower Defense'],
    devPeriod: '2026-03-09 ~ 2026-03-12',
    demoUrl: '/projects/defencegame',
    githubUrl: 'https://github.com/user/defencegame',
  },
  {
    id: '2',
    title: 'Pathfinder',
    description: 'A* 알고리즘 시각화 프로젝트. 경로 탐색 과정을 실시간으로 확인.',
    image: '/images/pathfinder.png',
    technologies: ['Unity', 'C#', 'Algorithm'],
    demoUrl: '/projects/pathfinder',
  },
  {
    id: '3',
    title: 'CommunityBoard',
    description: '실시간 게시판 웹 애플리케션. React + Node.js 기반.',
    image: '/images/community-board.png',
    technologies: ['React', 'Node.js', 'MongoDB'],
    devPeriod: '2026-02-15 ~ 2026-02-28',
    demoUrl: '/projects/community-board',
  },
];

// ===== Export =====
export { ProjectCard, ProjectGrid };
export type { Project, ProjectCardProps, ProjectGridProps };

// ===== Default Export (Full Page Demo) =====
const PortfolioPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0E]">
      {/* Header */}
      <header className="border-b border-[#1F2937] px-6 py-4">
        <h1 className="text-[#E5E7EB] text-xl font-bold font-['Pretendard']">
          Portfolio
        </h1>
      </header>

      {/* Project Grid */}
      <main>
        <ProjectGrid projects={sampleProjects} />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1F2937] px-6 py-4 text-center">
        <p className="text-[#9CA3AF] text-sm font-['Pretendard']">
          Game Developer Portfolio
        </p>
      </footer>
    </div>
  );
};

export default PortfolioPage;