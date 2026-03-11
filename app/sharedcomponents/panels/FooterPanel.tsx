"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    items: ["Trip Planner", "Charging Station Locator", "Charging Time Estimator", "EV vs Fuel Cost Calculator", "EV Match"],
  },
  {
    title: "Resources",
    items: ["EV Guide", "FAQs"],
  },
  {
    title: "For Business",
    items: ["CPO Corner", "Trip Planner APIs", "Charging Network"],
  },
  {
    title: "Company",
    items: ["About Us", "Contact", "Privacy Policy", "Terms of Service"],
  },
];

export default function FooterPanel() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-item",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.06, ease: "power3.out" },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={sectionRef} className="w-full bg-[#2f5b42] px-6 pt-14 text-white sm:px-10 lg:px-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div className="footer-item space-y-6 text-[14px] text-white/80">
            <div>
              <h3 className="text-[26px] font-semibold text-white">evjoints</h3>
              <p className="mt-3 text-[14px] leading-[1.6] text-white/80">
                Plan your EV trips with confidence. No guessing, no last-minute surprises—just
                properly planned journeys across India&apos;s charging networks.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span>admin@evjoints.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {[Linkedin, Instagram, Twitter, Facebook].map((Icon, index) => (
                <span
                  key={index}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80"
                >
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>

          <div className="footer-item grid grid-cols-2 gap-8 text-[14px] text-white/80 sm:grid-cols-3 lg:grid-cols-4">
            {footerLinks.map((group) => (
              <div key={group.title} className="space-y-3">
                <h4 className="text-[14px] font-semibold text-white">{group.title}</h4>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="space-y-3">
              <h4 className="text-[14px] font-semibold text-white">Download the app</h4>
              <p className="text-[13px] leading-[1.6] text-white/80">
                Plan trips on the go.
                <br />
                Available on iOS and Android.
              </p>
              <div className="mt-4 w-20 rounded-2xl bg-white/10 p-3">
                <div className="grid grid-cols-3 gap-1">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <span
                      key={index}
                      className={`block h-3 w-3 rounded-sm ${
                        index % 2 === 0 ? "bg-white" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-item mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-[13px] text-white/70 sm:flex-row">
          <span>© 2026 EVJoints. All rights reserved.</span>
          <span>Built with care for EV drivers across India.</span>
        </div>
      </div>
    </footer>
  );
}
