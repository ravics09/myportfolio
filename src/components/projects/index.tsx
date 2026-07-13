import Section from '@/components/ui/section';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

const projects = [
  {
    title: 'Raman Board',
    description:
      'Technical Interview Platform with Real-time video, collaborative coding, AI assistance and everything you need to evaluate top talent effectively.',
    image: '/images/ramanboardapp.png',
    link: 'https://ramanboard.com',
  },
  {
    title: 'Rama AI',
    description:
      'Production-grade AI Engineering Assistant Platform. It helps engineers understand, navigate, and modify application code by combining large language models with deep, structural knowledge of a codebase.',
    image: '/images/devassist.png',
    link: '#',
  },
];

const ProjectsSection = () => {
  return (
    <Section id="projects" title="Projects" className="justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8">
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[500px] rounded-xl p-6 border flex flex-col justify-between">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                {project.title}
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={project.image}
                  height="1000"
                  width="1000"
                  className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-start items-center mt-4">
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-bold hover:underline"
                >
                  Link
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
