type NavItem = {
  label: string;
  href?: string;
};

type TopNavProps = {
  items: NavItem[];
};

export default function TopNavBar({ items }: TopNavProps) {
  return (
    <div className="hidden h-10 items-center justify-center bg-[#165233] px-6 md:flex lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-12">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group relative text-[12px] font-normal tracking-[0.04em] text-white/90 transition hover:text-emerald-200"
          >
            {item.label}
            <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-emerald-300 transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>
    </div>
  );
}
