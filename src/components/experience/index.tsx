import { Timeline } from '@/components/ui/timeline';
import Section from '@/components/ui/section';

const data = [
  {
    title: 'Globant India Pvt. Ltd.',
    content: (
      <>
        <div className="flex justify-between items-center pb-5">
          <p className="text-lg md:text-xl ">
            Senior Software Engineer <span className="text-[#5ceac9]">@ Globant</span>
          </p>
          <p className="text-gray-500 text-xs md:text-sm">June 2022 - Present</p>
        </div>
        <div className="mb-5">
          <h5>Enterprise Promotion Management Platform (Endeavour Group)</h5>
          <p className="text-gray-500 text-xs md:text-sm py-5">
            Developed an enterprise promotion management platform used by business teams to manage promotional
            campaigns, product pricing, and large-scale business datasets. Owned the frontend architecture, scalable UI
            development, and complex data management features while collaborating with cross-functional engineering
            teams.
          </p>
          <ul className="list-disc pl-5 space-y-3 text-gray-500">
            <li className="text-xs md:text-sm font-normal">
              Designed the frontend foundation of a large-scale Next.js application by establishing project
              architecture, authentication, reusable component patterns, engineering standards, and development
              workflows.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Built a spreadsheet-style data management interface capable of handling large business datasets with
              advanced filtering, sorting, inline editing, CSV import/export, and client-side performance optimization.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Developed reusable UI components, custom React hooks, and shared utilities that improved code consistency,
              maintainability, and developer productivity across multiple modules.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Implemented collaborative enterprise features including role-based access control, nested comments, user
              tagging, audit workflows, and real-time business interactions.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Improved application performance through lazy loading, component memoization, efficient state management,
              and API optimization to deliver a responsive user experience.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Technologies: Next.js, React, TypeScript, TanStack Query, TanStack Table, ShadCN UI, PostgreSQL, Docker,
              REST APIs.
            </li>
          </ul>
        </div>

        <div className="mb-5">
          <h5>Enterprise Reporting Platform (Royal Caribbean Group)</h5>
          <p className="text-gray-500 text-xs md:text-sm py-5">
            Developed enterprise reporting services for Royal Caribbean Group to automate operational reporting across
            multiple cruise brands by integrating business data from Databricks and enterprise databases into
            standardized reports delivered to business stakeholders.
          </p>
          <ul className="list-disc pl-5 space-y-3 text-gray-500">
            <li className="text-xs md:text-sm font-normal">
              Developed backend services using NestJS to integrate Databricks REST APIs and enterprise databases for
              collecting and processing large operational datasets.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Built automated report generation pipelines that transformed complex JSON responses into business-friendly
              HTML reports for multiple operational teams.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Implemented scheduled report delivery with automated email notifications aligned with business time zones
              and operational reporting requirements.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Developed monitoring and notification mechanisms that published report generation failures and delivery
              issues to Slack, improving operational visibility and reducing manual monitoring efforts.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Optimized backend processing workflows by designing reusable reporting services, standardized data
              transformation logic, and maintainable service architecture.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Technologies: NestJS, Node.js, TypeScript, Databricks, REST API, MySQL, HTML Reports, Slack Integration,
              Scheduled Jobs
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: 'ITC Infotech Pvt. Ltd.',
    content: (
      <>
        <div className="flex justify-between items-center pb-5">
          <p className="text-lg md:text-xl ">
            Associate IT Consultant <span className="text-[#5ceac9]">@ ITC Infotech</span>
          </p>
          <p className="text-gray-500 text-xs md:text-sm">May 2020 - June 2022</p>
        </div>
        <div className="mb-5">
          <h5>SAP Intelligent Robotic Process Automation (SAP Labs)</h5>
          <p className="text-gray-500 text-xs md:text-sm py-5">
            Developed enterprise automation solutions for SAP Labs using SAP Intelligent Robotic Process Automation (SAP
            iRPA) and Node.js to automate repetitive business processes and integrate enterprise platforms. Built
            reusable automation components and SDK extensions that enabled SAP iRPA bots to interact with cloud services
            and third-party enterprise applications.
          </p>
          <ul className="list-disc pl-5 space-y-3 text-gray-500">
            <li className="text-xs md:text-sm font-normal">
              Designed and developed enterprise automation workflows using SAP Intelligent Robotic Process Automation
              (SAP iRPA), reducing manual effort and improving business process efficiency.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Built reusable Node.js extension modules that enabled SAP iRPA bots to integrate with enterprise platforms
              including AWS, Google Workspace, and DocuSign.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Developed custom automation activities and shared SDK components that accelerated the development of
              automation workflows across multiple business use cases.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Implemented comprehensive unit and integration testing using Mocha, Chai, and Chai HTTP to improve the
              reliability and maintainability of enterprise automation solutions.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Technologies: JavaScript, Node.js, AWS, IRPA cloud Studio, DocuSign API
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: 'Sonata Software Pvt. Ltd.',
    content: (
      <>
        <div className="flex justify-between items-center pb-5">
          <p className="text-lg md:text-xl ">
            Technical Consultant <span className="text-[#5ceac9]">@ Sonata Software</span>
          </p>
          <p className="text-gray-500 text-xs md:text-sm">Feb 2020 - May 2020</p>
        </div>
        <div className="mb-5">
          <h5>ABFRL B2B Retail Mobile Application (Aditya Birla Fashion & Retail)</h5>
          <p className="text-gray-500 text-xs md:text-sm py-5">
            Contributed to a React Native–based B2B retail application for Aditya Birla Fashion & Retail (ABFRL),
            enabling sales representatives to manage product catalogs, reviews, and ordering workflows. Focused on
            delivering offline-first capabilities, seamless data synchronization, and high-performance mobile
            experiences for enterprise retail operations.
          </p>
          <ul className="list-disc pl-5 space-y-3 text-gray-500">
            <li className="text-xs md:text-sm font-normal">
              Developed cross-platform mobile features using React Native, delivering product browsing, product reviews,
              shopping workflows, and enterprise retail functionalities.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Implemented offline-first capabilities by integrating AWS AppSync and Apollo GraphQL, enabling users to
              continue working reliably in low or no network connectivity environments.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Built reusable UI components and managed application state using Redux to ensure a consistent and
              responsive user experience across business workflows.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Collaborated with backend engineers and QA teams to integrate GraphQL APIs, resolve production issues, and
              improve application stability.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Technologies: React Native, Redux, AWS AppSync, Apollo GraphQL
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: 'Hotwax Systems',
    content: (
      <>
        <div className="flex justify-between items-center pb-5">
          <p className="text-lg md:text-xl ">
            Senior Enterprise Software Engineer <span className="text-[#5ceac9]">@ Hotwax Systems</span>
          </p>
          <p className="text-gray-500 text-xs md:text-sm">July 2019 - Jan 2020</p>
        </div>
        <div className="mb-5">
          <h5>Clienteling B2B Mobile Application</h5>
          <p className="text-gray-500 text-xs md:text-sm py-5">
            Contributed to the development of a React Native–based B2B clienteling application designed for retail sales
            associates to deliver personalized customer experiences. Built customer-facing features, optimized
            application performance, and collaborated with cross-functional teams to deliver a responsive and reliable
            mobile application.
          </p>
          <ul className="list-disc pl-5 space-y-3 text-gray-500">
            <li className="text-xs md:text-sm font-normal">
              Developed customer-facing mobile features including authentication, product catalog, product details,
              product reviews, shopping cart, and user onboarding using React Native.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Built reusable UI components and managed application state with Redux, improving code maintainability and
              ensuring a consistent user experience across the application.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Integrated REST APIs to enable real-time product information, customer interactions, and retail business
              workflows.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Optimized mobile performance through debugging, UI enhancements, and code refactoring to deliver a smooth
              and responsive enterprise mobile experience.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Technologies: React Native, Redux, Redux-thunk, Hotwax commerce.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: 'IBM India Pvt. Ltd.',
    content: (
      <>
        <div className="flex justify-between items-center pb-5">
          <p className="text-lg md:text-xl ">
            Associate System Engineer <span className="text-[#5ceac9]">@ IBM</span>
          </p>
          <p className="text-gray-500 text-xs md:text-sm">Jan 2017 - July 2019</p>
        </div>
        <div className="mb-5">
          <h5>VDI Outage Tracker (Internal Product)</h5>
          <p className="text-gray-500 text-xs md:text-sm py-5">
            Developed an internal web application to monitor Virtual Desktop Infrastructure (VDI) outages, manage
            support tickets, and improve issue visibility across internal teams. Contributed to both frontend and
            backend development by building user interfaces, REST APIs, and reusable application components.
          </p>
          <ul className="list-disc pl-5 space-y-3 text-gray-500">
            <li className="text-xs md:text-sm font-normal">
              Developed frontend features using React.js and backend REST APIs using Node.js and Express.js for user
              authentication, ticket management, and reporting workflows.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Built reusable React components and centralized application state using Redux to improve maintainability
              and ensure a consistent user experience.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Integrated frontend applications with backend services through REST APIs, enabling efficient issue
              tracking and support ticket lifecycle management.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Collaborated with senior engineers to deliver new features, resolve production issues, and improve
              application performance across the platform.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Participated in Agile development, code reviews, testing, and deployment activities while contributing to
              the overall stability of the application.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Technologies: Node.js, React.js, Express.js, MongoDB, REST APIs, Redux, Redux-thunk.
            </li>
          </ul>
        </div>

        <div className="mb-5">
          <h5>Nationwide Building Society – Multi Channel Development Center</h5>
          <p className="text-gray-500 text-xs md:text-sm py-5">
            Contributed to the development and enhancement of an enterprise banking platform for Nationwide Building
            Society by implementing frontend features, backend services, and business workflow enhancements. Worked
            across the full stack to deliver new functionality, improve application performance, and maintain production
            stability.
          </p>
          <ul className="list-disc pl-5 space-y-3 text-gray-500">
            <li className="text-xs md:text-sm font-normal">
              Developed and enhanced frontend features using React.js while integrating REST APIs to support enterprise
              banking workflows and customer-facing business applications.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Implemented backend services using Node.js and Express.js to support new business requirements and
              existing application functionality.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Built reusable UI components and shared application modules, improving code consistency and simplifying
              feature development across multiple business workflows.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Investigated and resolved production issues, optimized application performance, and collaborated with
              cross-functional teams to deliver stable enterprise software.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Worked closely with business analysts, QA engineers, and senior developers throughout the Agile software
              development lifecycle.
            </li>
            <li className="text-xs md:text-sm font-normal">
              Technologies: Node.js, React.js, Express.js, MongoDB, REST APIs, Redux, Redux-thunk.
            </li>
          </ul>
        </div>
      </>
    ),
  },
];

const ExperienceSection = () => {
  return (
    <Section id="experience" title="Experience" className="justify-center items-center">
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </Section>
  );
};

export default ExperienceSection;
