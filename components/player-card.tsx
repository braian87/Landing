"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"

interface PlayerCardProps {
  name: string
  image: string
  position?: string
  team?: string
  description?: string
}

export default function PlayerCard({ name, position, team, description, image }: PlayerCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-800 transition-colors">{name}</h3>

        {position && (
          <div className="mt-2">
            <span className="text-sm font-medium text-blue-600">Posición:</span>
            <p className="text-blue-700">{position}</p>
          </div>
        )}

        {team && (
          <div className="mt-2">
            <span className="text-sm font-medium text-blue-600">Equipo:</span>
            <p className="text-blue-700">{team}</p>
          </div>
        )}

        {description && (
          <div className="mt-4">
            <button
              onClick={toggleExpand}
              className="flex items-center justify-between w-full px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-700 transition-colors"
            >
              <span>Descripción</span>
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            <div
              className={`mt-2 overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="text-blue-700 p-2">{description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

