"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"

interface CopaAmericaCardProps {
  year: string
  host: string
  result: string
  position: string
  coach: string
  topScorer?: string
  goals?: string
  image: string
  details: string
}

export default function CopaAmericaCard({
  year,
  host,
  result,
  position,
  coach,
  topScorer,
  goals,
  image,
  details,
}: CopaAmericaCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={`Copa América ${year}`} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h3 className="text-2xl font-bold text-white p-4">Copa América {year}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm font-medium text-blue-600">Sede</p>
            <p className="text-blue-800">{host}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-blue-600">Resultado</p>
            <p className="text-blue-800 font-semibold">{result}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-blue-600">Posición</p>
            <p className="text-blue-800">{position}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-blue-600">Director Técnico</p>
            <p className="text-blue-800">{coach}</p>
          </div>
          {topScorer && (
            <div>
              <p className="text-sm font-medium text-blue-600">Goleador</p>
              <p className="text-blue-800">{topScorer}</p>
            </div>
          )}
          {goals && (
            <div>
              <p className="text-sm font-medium text-blue-600">Goles</p>
              <p className="text-blue-800">{goals}</p>
            </div>
          )}
        </div>

        <button
          onClick={toggleExpand}
          className="flex items-center justify-between w-full px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-700 transition-colors"
        >
          <span>Detalles</span>
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        <div
          className={`mt-4 overflow-hidden transition-all duration-300 ${
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-blue-700 p-2">{details}</p>
        </div>
      </div>
    </div>
  )
}

