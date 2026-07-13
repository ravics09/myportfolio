// components/ui/section.tsx
import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className = '',
  maxWidth = 'max-w-[1400px]', // Increased from max-w-4xl for the new layout
}) => {
  return (
    <section id={id} className={`flex min-h-screen pt-24 w-full bg-[#081221] overflow-hidden ${className}`}>
      <div className={`${maxWidth} flex flex-col space-y-4 px-6 md:px-12 w-full mx-auto relative z-10`}>
        {title && (
          <h2 className="text-xl md:text-3xl mb-8 text-white font-bold">
            {title}
            <span className="block h-[1px] bg-[#5ceac9]/30 w-full mt-4" />
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
