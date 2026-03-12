import Image from "next/image";
import logoImage from "../../../assets/889ac7f3a67dc7f9f2288685ceb84be83e9e4703.png";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={logoImage}
        alt="EVJoints"
        width={160}
        height={48}
        className="h-[40px] w-auto object-contain"
        priority
      />
    </div>
  );
}
