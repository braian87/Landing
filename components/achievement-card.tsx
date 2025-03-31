import Image from "next/image"

interface AchievementCardProps {
  name: string
  description: string
  image: string
}

export default function AchievementCard({ name, description, image }:AchievementCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">{name}</h3>
        <p className="text-blue-700">{description}</p>
      </div>
    </div>
  )
}

