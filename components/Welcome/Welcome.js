import Image from "next/image";
import weather from "../../public/weather.svg"

export default function Welcome() {
  return (
    <div className="welcome">
      <Image src={weather} className="image"/>
    </div>
  );
}
