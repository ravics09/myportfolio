import { MagicCard } from '@/components/ui/magic-card';
import Section from '@/components/ui/section';

interface Achievement {
  title: string;
  description: string;
  date: string;
}

const achievements: Achievement[] = [
  {
    title: 'Google Cloud Associate Engineer Certification',
    description: 'Earned the Google Cloud Associate Engineer certification, showcasing expertise in cloud solutions.',
    // link: 'https://www.credly.com/badges/fec206ee-8e8a-47c7-b9f2-bb48374ea803/public_url',
    date: 'December 2024',
  },
  {
    title: 'AWS Developer Associate Certification',
    description: 'Earned the AWS Developer Associate Certification, showcasing expertise in cloud solutions.',
    // link: 'https://www.credly.com/badges/fec206ee-8e8a-47c7-b9f2-bb48374ea803/public_url',
    date: 'December 2024',
  },
  {
    title: 'Google Cloud Digital Leader Certification',
    description: 'Earned the Google Cloud Digital Leader certification, showcasing expertise in cloud solutions.',
    // link: 'https://www.credly.com/badges/fec206ee-8e8a-47c7-b9f2-bb48374ea803/public_url',
    date: 'November 2024',
  },
  {
    title: 'Hacker Rank JavaScript assessment',
    description: 'Earned Hacker Rank JavaScript certification by clearing the assessment.',
    date: 'November 2023',
  },
  {
    title: 'Outstanding Performer of The Quarter',
    description: 'Recognized as Outstanding Performer of The Quarter 2021 in ITC Infotech.',
    date: 'July 2021',
  },
  {
    title: 'GATE 2014 Qualified',
    description: 'Qualified Gate 2014 Competitive Exam with 97.60 percentile.',
    date: '2014',
  },
];

const AchievementSection = () => {
  return (
    <Section id="achievements" title="Achievement" className="justify-center items-center">
      <div className="flex flex-col items-center space-y-6">
        <div className="md:text-xl text-gray-500 space-y-4 w-full max-w-4xl">
          <p>
            Highlighting my key accomplishments, certifications, and recognitions that reflect my professional growth.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-[#5ceac9]">{achievement.title}</h3>
              <p className="text-gray-400 mt-2">{achievement.description}</p>
              <a href={achievement.link} className="text-gray-300 mt-2">
                Link
              </a>
              <span className="text-sm mt-4 block">{achievement.date}</span>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {achievements.map((achievement, index) => (
            <MagicCard
              key={index}
              className="cursor-pointer bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between hover:shadow-xl transition duration-300"
              gradientColor="#D9D9D955"
            >
              <h3 className="text-xl font-semibold text-[#5ceac9]">{achievement.title}</h3>
              <p className="text-gray-400 mt-2">{achievement.description}</p>
              <span className="text-sm mt-4 block">{achievement.date}</span>
            </MagicCard>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AchievementSection;
