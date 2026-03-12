import Image from "next/image";
import logoImage from "../../../assets/889ac7f3a67dc7f9f2288685ceb84be83e9e4703.png";

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