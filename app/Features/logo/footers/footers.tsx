export default function HeroFooters() {
  const avatars = [1, 2, 3, 4, 5];
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col items-center gap-4 text-center lg:ml-10 lg:items-start lg:text-left">

      {/* Top Row */}
      <div className="hero-copy-item flex flex-wrap items-center justify-center gap-5 lg:justify-start">

        {/* Avatars */}
        <div className="flex -space-x-3">
          {avatars.map((id) => (
            <div
              key={id}
              className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-slate-200"
            >
              <img
                src={`https://i.pravatar.cc/100?u=${id}`}
                alt="EV driver"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Rating Section */}
        <div className="flex items-center gap-3">

          {/* Stars */}
          <div className="flex items-center gap-1">
            {stars.map((star) => (
              <span
                key={star}
                className="text-lg leading-none text-[#f59e0b]"
              >
                ★
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="h-4 w-px bg-slate-300" />

          {/* Rating Text */}
          <p className="text-sm font-medium text-slate-700 whitespace-nowrap">
            <span className="font-semibold text-slate-900">4.8 / 5</span>
          </p>

          {/* Google Logo */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
            className="h-4 w-auto opacity-80"
          />
        </div>
      </div>

      {/* Bottom Text */}
      <p className="hero-copy-item text-sm font-medium text-slate-500">
        Trusted by{" "}
        <span className="font-semibold text-slate-900">
          4,000+ EV drivers
        </span>{" "}
        across India
      </p>

    </div>
  );
}
