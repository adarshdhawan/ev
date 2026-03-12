import Image from "next/image";
import logoImage from "../../../assets/Green logo with black tagline and R png transparent.png";

export default function Logo() {
  return (
    <div className="flex items-center justify-start w-full">
      <Image
        src={logoImage}
        alt="EVJoints"
        width={100}
        height={65}
        className="h-[50px] w-auto object-contain"
        priority
      />
    </div>
  );
}
