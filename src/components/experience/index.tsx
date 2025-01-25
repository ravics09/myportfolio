import { Timeline } from '@/components/ui/timeline';
import Section from '@/components/ui/section';

const data = [
  {
    title: 'Globant India Pvt. Ltd.',
    content: (
      <>
        <div className="mb-5">
          <p className="text-lg md:text-xl ">
            Senior Software Engineer <span className="text-[#5ceac9]">@ Globant</span>
          </p>
          <p className="text-gray-500 text-xs md:text-sm">June 2022 - Present</p>
        </div>
        <ul className="list-disc pl-5 space-y-3 text-gray-500">
          <li className="text-xs md:text-sm font-normal">
            Led full-stack development for a data-driven promotional planning app, for the client Endeavour group,
            boosting promotional effectiveness by 15%.
          </li>
          <li className="text-xs md:text-sm font-normal">
            Designed and developed production-grade infrastructure, improving app scalability by 25%.
          </li>
          <li className="text-xs md:text-sm font-normal">
            Developed key pages Sign-in/Sign-up, Home, Dashboard, Profile, focusing on a seamless user experience and
            efficient backend integration.
          </li>
          <li className="text-xs md:text-sm font-normal">
            Implemented key features like user authentication, global search, and pagination, enhancing the user
            experience.
          </li>
          <li className="text-xs md:text-sm font-normal">
            Engineered a dynamic comment system with advanced user tagging and comment management, improving
            communication efficiency by 30%.
          </li>
          <li className="text-xs md:text-sm font-normal">
            Optimized app performance by reducing load times by 40% through caching and lazy loading.
          </li>
          <li className="text-xs md:text-sm font-normal">
            Technologies: Next.js, ShadCN UI, Tanstack Table, Redux, PostgreSQL, Docker.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'ITC Infotech Pvt. Ltd.',
    content: (
      <>
        <div className="mb-5">
          <p className="text-lg md:text-xl ">
            Associate IT Consultant <span className="text-[#5ceac9]">@ ITC Infotech</span>
          </p>
          <p className="text-gray-500 text-xs md:text-sm">May 2020 - June 2022</p>
        </div>
        <ul className="list-disc pl-5 space-y-3 text-gray-500">
          <li className="text-xs md:text-sm font-normal">
            Worked as Node.js developer on SAP IRPA SDK Project for the client SAP Lab.
          </li>
          <li className="text-xs md:text-sm font-normal">
            Programmed automation solutions using SAP IRPA to streamline business processes, including form submissions
            and task automation for SuccessFactors and Ariba, reducing processing time by 50%.
          </li>
          <li className="text-xs md:text-sm font-normal">
            Integrated AWS services to automate critical workflows, including create/delete S3 buckets, uploading
            objects, and automate document processing using AWS Textract improving accuracy by 40%.
          </li>
          <li className="text-xs md:text-sm font-normal">Technologies: JavaScript, Node.js, AWS, IRPA cloud Studio.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Sonata Software Pvt. Ltd.',
    content: (
      <>
        <div className="mb-5">
          <p className="text-lg md:text-xl ">
            Technical Consultant <span className="text-[#5ceac9]">@ Sonata Software</span>
          </p>
          <p className="text-gray-500 text-xs md:text-sm">Feb 2020 - May 2020</p>
        </div>
        <ul className="list-disc pl-5 space-y-3 text-gray-500">
          <li className="text-xs md:text-sm font-normal">
            Developed offline media functionality for ABFRL DTS iPad app, increasing app usage by 50% in lowconnectivity
            areas.
          </li>
          <li className="text-xs md:text-sm font-normal">
            Integrated AWS AppSync and GraphQL for efficient real-time data synchronization.
          </li>
          <li className="text-xs md:text-sm font-normal">
            Engineered critical business logic for product review, add-to-cart, and internet connectivity monitoring,
            improving app functionality.
          </li>
          <li className="text-xs md:text-sm font-normal">Technologies: React Native, Redux, AWS AppSync, GraphQL.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Hotwax Systems',
    content: (
      <>
        <div className="mb-5">
          <p className="text-lg md:text-xl ">
            Senior Enterprise Software Engineer <span className="text-[#5ceac9]">@ Hotwax Systems</span>
          </p>
          <p className="text-gray-500 text-xs md:text-sm">July 2019 - Jan 2020</p>
        </div>
        <ul className="list-disc pl-5 space-y-3 text-gray-500">
          <li className="text-xs md:text-sm font-normal">
            Worked as React Native developer on e-commerce b2b Clienteling App.
          </li>
          <li className="text-xs md:text-sm font-normal">
            Pioneered the development of the app from the ground up, empowering sales associates with real-time customer
            data to enhance engagement and in-store personalization.
          </li>
          <li className="text-xs md:text-sm font-normal">
            Spearheaded the design and development of core app interfaces, including product List and checkout stre
            amlined user flow and improved overall app efficiency, resulting in 1000+ successful transactions daily.
          </li>
          <li className="text-xs md:text-sm font-normal">
            Integrated state management using Redux and Redux-thunk, ensuring smooth data flow throughout app.
          </li>
          <li className="text-xs md:text-sm font-normal">
            Technologies: React Native, Redux, Redux-thunk, Hotwax commerce.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'IBM India Pvt. Ltd.',
    content: (
      <>
        <div className="mb-5">
          <p className="text-lg md:text-xl ">
            Associate System Engineer <span className="text-[#5ceac9]">@ IBM</span>
          </p>
          <p className="text-gray-500 text-xs md:text-sm">Jan 2017 - July 2019</p>
        </div>
        <ul className="list-disc pl-5 space-y-3 text-gray-500">
          <li className="text-xs md:text-sm font-normal">
            Engineered a web application (VDI outage Tracker) from scratch to track VDI issues and reducing employee
            downtime by 15%.
          </li>
          <li className="text-xs md:text-sm font-normal">
            Programmed and deployed REST APIs for user authentication, ticket management, and report generation using
            Node.js and Express.
          </li>
          <li className="text-xs md:text-sm font-normal">
            Implemented reusable UI components in React, leading to a 25% improvement in development speed.
          </li>
          <li className="text-xs md:text-sm font-normal">
            Implemented different pages including sign-in, sign-up, admin dashboard, ticket management, user profile,
            notifications, help/FAQ and settings.
          </li>
          <li className="text-xs md:text-sm font-normal">
            Streamlined state management with Redux and optimized app performance through effective caching and user
            input validation.
          </li>
          <li className="text-xs md:text-sm font-normal">
            Technologies: Node.js, React.js, Express.js, MongoDB, REST APIs, Redux, Redux-thunk.
          </li>
        </ul>
      </>
    ),
  },
];

const ExperienceSection = () => {
  return (
    <Section id="experience" title="Where I’ve Worked" className="justify-center items-center mb-5">
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </Section>
  );
};

export default ExperienceSection;
