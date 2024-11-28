import React from 'react';

// Define the props for the Section component using TypeScript's type system
interface SectionProps {
  id?: string; // Optional unique identifier for the section
  title?: string; // Title of the section
  children: React.ReactNode; // Content to be rendered inside the section
  className?: string; // Optional additional classes for custom styling
}

/**
 * Section component that displays a title and children content in the center of the section
 * @param id - The ID used to identify the section for navigation or linking
 * @param title - The title displayed at the top of the section
 * @param children - The child elements or components to be rendered inside the section
 * @param className - Additional custom class names for the section
 * @returns A section with centered content
 */
const Section: React.FC<SectionProps> = ({ id, title, children, className }) => {
  return (
    <section id={id} className={`flex min-h-screen mx-auto pt-24 container ${className}`}>
      <div className="max-w-4xl flex flex-col space-y-4 px-5 w-full ">
        {title && (
          <h2 className="text-4xl mb-2">
            {title}
            <span className="block h-[1px] bg-[#5ceac9] w-full mt-2" />
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
