type NavItem = {
  label: string;
  href?: string;
};

type TopNavProps = {
  items: NavItem[];
};

export default function TopNavBar({ items }: TopNavProps) {
  return (
    <div className="hidden h-10 items-center justify-center bg-[#165233] px-6 md:flex lg:px-10 font-sans">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-16">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group relative px-2 py-1 text-[12px] font-medium tracking-[2px] text-white/90 transition hover:text-emerald-200"
          >
            <span className="relative z-10">{item.label}</span>
            <span className="pointer-events-none absolute -bottom-1 left-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-emerald-200 transition-all duration-300 group-hover:w-8" />
          </a>
        ))}
      </div>
    </div>
  );
}
