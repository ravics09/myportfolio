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
    <section id={id} className={`min-h-screen container mx-auto flex items-center justify-center ${className}`}>
      <div className="text-left">
        {title && <h2 className="text-4xl mb-4">{title}</h2>}
        <div className="max-w-4xl mx-auto">{children}</div>
      </div>
    </section>
  );
};

export default Section;
