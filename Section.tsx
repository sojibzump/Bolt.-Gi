
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className }) => {
  return (
    <section className={`bg-neutral-darker p-6 rounded-lg shadow-xl mb-8 ${className}`}>
      <h2 className="text-2xl font-semibold text-primary-light mb-6 border-b-2 border-primary-dark pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
    