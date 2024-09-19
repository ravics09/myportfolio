const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center py-10">
      <div className="text-center">
        <h2 className="text-4xl mb-4">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Section;
