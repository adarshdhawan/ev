export default function HeroFooters() {
  return (
    <div className="flex flex-col gap-4">
      <div className="hero-copy-item flex flex-wrap items-center gap-4">
        {/* Avatars */}
        <div className="flex -space-x-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                <img 
                    src={`https://i.pravatar.cc/100?u=${i}`} 
                    alt="User" 
                    className="h-full w-full object-cover"
                />
            </div>
          ))}
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="text-xl text-[#f59e0b]">★</span>
            ))}
          </div>
          <div className="h-4 w-[1px] bg-slate-300" />
          <p className="text-base text-slate-600 font-medium whitespace-nowrap">
            <span className="font-bold text-slate-900">4.8 / 5</span> on Google Reviews
          </p>
          <img 
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
            alt="Google" 
            className="h-4 w-auto grayscale opacity-70"
          />
        </div>
      </div>

      <p className="hero-copy-item text-base text-slate-500 font-medium">
        Trusted by <span className="font-bold text-slate-800">4,000+ EV drivers</span> across India
      </p>
    </div>
  );
}
