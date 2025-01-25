import Section from '@/components/ui/section';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

const achievements = [
  {
    title: 'GCP Associate Cloud Engineer',
    description:
      'Earned the Google Cloud Associate Cloud Engineer certification, showcasing expertise in cloud solutions.',
    image: '/images/associatecloudengineer.png',
    githubLink: 'https://www.credly.com/badges/c92cab62-b9b4-4591-985a-8088ef39e571/public_url',
  },
  {
    title: 'GCP Cloud Digital Leader',
    description: 'Earned the Google Cloud Digital Leader certification, showcasing expertise in cloud solutions.',
    image: '/images/clouddigitalleader.png',
    githubLink: 'https://www.credly.com/badges/fec206ee-8e8a-47c7-b9f2-bb48374ea803/public_url',
  },
  {
    title: 'Docker Foundations Professional Certificate',
    description: 'Earned the Docker Foundations Professional certification, showcasing expertise in Docker.',
    image: '/images/linkedin.png',
    githubLink:
      'https://www.linkedin.com/learning/certificates/e4b125d2936cd20838b3649654910ab935fc6691944ecd6cd05cd9f93d3d6534?trk=share_certificate',
  },
  {
    title: 'Outstanding Performer Of The Quarter Award',
    description: 'Got rewarded for my dedication of work as Outstanding Performer Of The Quarter Award in ITC Infotech',
    image: '/images/award.png',
    githubLink:
      'https://www.linkedin.com/in/ravics09/overlay/1635471173149/single-media-viewer/?profileId=ACoAABXbBQgB51gnxPWtNlVKe1qlt1SUsc0lUXA',
  },
];

const AchievementSection = () => {
  return (
    <Section id="achievements" title="Achievements" className="justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8">
        {achievements.map((achievement, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[500px] rounded-xl p-6 border flex flex-col justify-between">
              <div>
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  {achievement.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {achievement.description}
                </CardItem>
              </div>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={achievement.image}
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
                  href={achievement.githubLink}
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

export default AchievementSection;
