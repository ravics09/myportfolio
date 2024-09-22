import { useEffect, useState } from 'react';

// Custom hook to track the active section on the page
export const useActiveSection = (sectionIds: string[]): string | null => {
  const [activeSection, setActiveSection] = useState<string | null>(null); // Allow null when no section is active

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id));
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is in view
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let foundActiveSection = false;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Update active section when section is in view
          foundActiveSection = true;
        }
      });
      // If no section is intersecting, set active section to null
      if (!foundActiveSection) {
        setActiveSection(null); // No section is active
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [sectionIds]);

  return activeSection; // Return the ID of the currently active section, or null if none
};
