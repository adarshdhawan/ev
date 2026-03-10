export default function HeroFooters() {
  return (
    <>
      <div className="hero-copy-item flex flex-wrap items-center gap-4 pt-1">
        <div className="flex -space-x-2">
          <span className="h-9 w-9 rounded-full border-2 border-white bg-emerald-200" />
          <span className="h-9 w-9 rounded-full border-2 border-white bg-emerald-300" />
          <span className="h-9 w-9 rounded-full border-2 border-white bg-emerald-400" />
          <span className="h-9 w-9 rounded-full border-2 border-white bg-emerald-500" />
        </div>
        <p className="text-lg font-semibold text-amber-500">★ ★ ★ ★ ★</p>
        <p className="text-lg text-slate-700">
          <span className="font-bold">4.8 / 5</span> on Google Reviews
        </p>
      </div>
      <p className="hero-copy-item text-base text-slate-600">
        Trusted by <span className="font-bold text-slate-800">4,000+ EV drivers</span> across India
      </p>
    </>
  );
}
