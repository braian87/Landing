import Image from "next/image";
import Link from "next/link";

interface PlayerCardProps {
  name: string;
  image: string;
  position: string;
  team: string;
  description: string;
}

export default function PlayerCard({ name, position, team, description, image }: PlayerCardProps) {
  return (
    <Link href="#">
      <a className="group">
        <div className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 group-hover:shadow-xl">
          <div className="relative h-48 w-full">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="p-4 space-y-2">
            <h3 className="text-xl font-semibold text-blue-800 group-hover:text-blue-600 transition-colors">{name}</h3>
            <h4 className="text-lg text-gray-600">{position}</h4>
            <h4 className="text-lg text-gray-600">{team}</h4>
            <p className="text-base text-gray-700">{description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}