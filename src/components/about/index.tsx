import React from 'react';
import Section from '@/components/ui/section';
import { ArrowRight, Mail, Download } from 'lucide-react';

// Custom SVG components
const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Static Data Configuration
const SOCIAL_LINKS = [
  { icon: GithubIcon, href: 'https://github.com/ravics09' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/ravics09/' },
  { icon: Mail, href: 'mailto:ravisharmacs09@gmail.com' },
  { icon: Download, href: 'https://drive.google.com/file/d/1Nu1g3QxYgNfg5bLpqx07nct9yl90kDRg/view?usp=sharing' },
];

const TECH_CATEGORIES = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Redux', 'TanStack Query', 'ShadCN UI'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'Express.js', 'REST APIs', 'GraphQL', 'Python'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Redis', 'GitHub Actions', 'CI/CD', 'Linux'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma', 'pgvector'],
  },
  {
    title: 'AI Engineering',
    skills: ['OpenAI API', 'Anthropic Claude', 'Vercel AI SDK', 'RAG', 'Vector Search', 'Prompt Engineering'],
  },
];

const AboutSection = () => {
  return (
    <Section id="about" title="About Me" className="justify-center items-center">
      <div className="flex flex-col space-y-6 text-base sm:text-lg md:text-xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-9 space-y-6 text-[15px] sm:text-base leading-relaxed text-slate-400">
            <p>
              Over the past nine years, I&apos;ve designed and delivered enterprise-scale software used across banking,
              retail, travel, and enterprise automation, focusing on scalable backend architecture, modern frontend
              systems, and cloud-native development.
            </p>
            <p>
              I specialize in designing scalable backend services, modern frontend applications, and cloud-native
              systems using{' '}
              <span className="text-[#5ceac9] font-medium">
                Node.js, TypeScript, React, Next.js, NestJS, PostgreSQL, Docker,
              </span>{' '}
              and <span className="text-[#5ceac9] font-medium">AWS</span>. Throughout my career, I&apos;ve contributed
              to enterprise platforms used by global organizations, focusing on software architecture, performance,
              maintainability, and developer productivity.
            </p>
            <p>
              Recently, I&apos;ve expanded into <span className="text-[#5ceac9] font-medium">AI Engineering</span> by
              building production-ready applications using Retrieval-Augmented Generation{' '}
              <span className="text-[#5ceac9] font-medium">(RAG)</span>,{' '}
              <span className="text-[#5ceac9] font-medium">OpenAI</span> and{' '}
              <span className="text-[#5ceac9] font-medium">Anthropic APIs</span>, vector search, conversational memory,
              and streaming AI experiences. My interest lies in applying AI to solve practical engineering and business
              problems.
            </p>
            <p>
              Outside of client work, I enjoy building personal engineering projects that explore distributed systems,
              real-time communication, cloud-native architecture, and developer productivity tools.
            </p>
          </div>

          {/* Right Column: Profile Card */}
          <div className="lg:col-span-3 bg-[#0A1122] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-xl self-start">
            <img
              src="/images/profile.png"
              alt="Ravi Sharma"
              className="w-32 h-32 rounded-full border-2 border-[#5ceac9] object-cover mb-6"
            />
            <h3 className="text-xl xl:text-2xl font-bold text-white mb-1 whitespace-nowrap">Ravi Sharma</h3>
            <p className="text-[#5ceac9] font-medium mb-6 whitespace-nowrap text-[14px] xl:text-[15px]">
              Senior Full Stack Engineer
            </p>

            <div className="flex justify-center gap-3 w-full">
              {SOCIAL_LINKS.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="p-2 border border-slate-700 rounded-md hover:bg-slate-800 transition-colors text-slate-300 hover:text-white"
                  rel="noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Technologies */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6">Technologies I Work With</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {TECH_CATEGORIES.map((category, idx) => (
              <div key={idx} className="bg-[#0A1122] border border-slate-800 rounded-xl p-6 flex flex-col">
                <h5 className="text-[#5ceac9] font-semibold flex items-center mb-4">{category.title}</h5>
                <ul className="space-y-3 text-sm text-slate-300">
                  {category.skills.map((tech) => (
                    <li key={tech} className="flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-[#5ceac9] shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
