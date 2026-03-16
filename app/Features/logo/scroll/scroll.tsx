"use client";


type SectionHeaderProps = {
  title: string;
};

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <section className="relative w-full py-16 bg-white overflow-hidden">
      
      {/* Decorative Curve (optional) */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-emerald-300/40"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        
        <h2 className="
          text-3xl 
          sm:text-4xl 
          lg:text-5xl 
          font-bold 
          text-emerald-600
          tracking-tight
        ">
          {title}
        </h2>

      </div>
    </section>
  );
}