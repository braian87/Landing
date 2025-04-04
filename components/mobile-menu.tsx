"use client"

import { useRef } from "react"

export default function MobileMenu() {
  const detailsRef = useRef<HTMLDetailsElement>(null)

  const handleLinkClick = () => {
    if (detailsRef.current) {
      detailsRef.current.open = false
    }
  }

  return (
    <div className="relative">
      <details ref={detailsRef} className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-center rounded-md bg-blue-600 p-2 text-white hover:bg-blue-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </summary>

        <div className="absolute right-0 z-10 mt-3 w-56 rounded-md border border-gray-100 bg-white shadow-lg">
          <div className="p-2">
            <a
              href="#inicio"
              className="block rounded-lg px-4 py-2 text-blue-700 hover:bg-blue-50"
              onClick={handleLinkClick}
            >
              Inicio
            </a>
            <a
              href="#jugadores"
              className="block rounded-lg px-4 py-2 text-blue-700 hover:bg-blue-50"
              onClick={handleLinkClick}
            >
              Jugadores
            </a>
            <a
              href="#logros"
              className="block rounded-lg px-4 py-2 text-blue-700 hover:bg-blue-50"
              onClick={handleLinkClick}
            >
              Logros
            </a>
            <a
              href="#mundiales"
              className="block rounded-lg px-4 py-2 text-blue-700 hover:bg-blue-50"
              onClick={handleLinkClick}
            >
              Mundiales
            </a>
            <a
              href="#copas-america"
              className="block rounded-lg px-4 py-2 text-blue-700 hover:bg-blue-50"
              onClick={handleLinkClick}
            >
              Copas América
            </a>
            <a
              href="#finales"
              className="block rounded-lg px-4 py-2 text-blue-700 hover:bg-blue-50"
              onClick={handleLinkClick}
            >
              Finales
            </a>
            <a
              href="#records"
              className="block rounded-lg px-4 py-2 text-blue-700 hover:bg-blue-50"
              onClick={handleLinkClick}
            >
              Récords
            </a>
            <a
              href="#historia"
              className="block rounded-lg px-4 py-2 text-blue-700 hover:bg-blue-50"
              onClick={handleLinkClick}
            >
              Historia
            </a>
            <a
              href="#nosotros"
              className="block rounded-lg px-4 py-2 text-blue-700 hover:bg-blue-50"
              onClick={handleLinkClick}
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              className="block rounded-lg px-4 py-2 text-blue-700 hover:bg-blue-50"
              onClick={handleLinkClick}
            >
              Contacto
            </a>
          </div>
        </div>
      </details>
    </div>
  )
}

