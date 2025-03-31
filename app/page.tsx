import Image from "next/image"
import { Facebook, Instagram, MessageCircle, Youtube, Mail, MapPin, Phone, Twitter } from "lucide-react"
import ContactForm from "@/components/contact-form"
import PlayerCard from "@/components/player-card"
import AchievementCard from "@/components/achievement-card"
import HistorySection from "@/components/history-section"
import WhatsAppButton from "@/components/whatsapp-button"
import MobileMenu from "@/components/mobile-menu"

export default function Home() {
  const whatsappNumber = "+5491163604558"
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  const players = [
    {
      name: "Lionel Messi",
      position: "Delantero",
      team: "Inter Miami",
      description:
        "Considerado el mejor jugador del mundo y uno de los mejores de todos los tiempos. Capitán de la selección y líder del equipo campeón del mundo en Qatar 2022.",
      image: "/messi.png?height=200&width=300",
    },
    {
      name: "Ángel Di María",
      position: "Extremo",
      team: "Benfica",
      description:
        "Jugador clave en las finales de Copa América 2021, Finalissima 2022 y Mundial 2022. Conocido por su velocidad y precisión en los centros.",
      image: "/dimaria.png?height=200&width=300",
    },
    {
      name: "Emiliano 'Dibu' Martínez",
      position: "Arquero",
      team: "Aston Villa",
      description:
        "Héroe en las tandas de penales durante la Copa América 2021 y el Mundial 2022. Ganador del premio Yashin al mejor portero del mundo.",
      image: "/dibu.png?height=200&width=300",
    },
    {
      name: "Nahuel Molina",
      position: "Lateral Derecho",
      team: "Atlético Madrid",
      description:
        "Defensor con gran proyección ofensiva. Anotó un gol crucial contra Países Bajos en cuartos de final del Mundial 2022.",
      image: "/molina.png?height=200&width=300",
    },
    {
      name: "Cristian 'Cuti' Romero",
      position: "Defensor Central",
      team: "Tottenham Hotspur",
      description:
        "Defensor aguerrido y líder de la línea defensiva. Conocido por su capacidad para anticipar y su juego físico.",
      image: "/romero.png?height=200&width=300",
    },
    {
      name: "Nicolás Otamendi",
      position: "Defensor Central",
      team: "Benfica",
      description: "Veterano de la defensa y pieza clave en la solidez defensiva del equipo campeón del mundo.",
      image: "/otamendi.png?height=200&width=300",
    },
    {
      name: "Nicolás Tagliafico",
      position: "Lateral Izquierdo",
      team: "Lyon",
      description: "Defensor sólido con buena capacidad para sumarse al ataque. Campeón del mundo en Qatar 2022.",
      image: "/tagliafico.png?height=200&width=300",
    },
    {
      name: "Rodrigo De Paul",
      position: "Mediocampista",
      team: "Atlético Madrid",
      description:
        "El motor del mediocampo argentino. Conocido como 'el motorcito' por su incansable despliegue físico.",
      image: "/depaul.png?height=200&width=300",
    },
    {
      name: "Enzo Fernández",
      position: "Mediocampista",
      team: "Chelsea",
      description: "Mejor jugador joven del Mundial 2022. Destacado por su visión de juego y precisión en los pases.",
      image: "/enzo.png?height=200&width=300",
    },
    {
      name: "Alexis Mac Allister",
      position: "Mediocampista",
      team: "Liverpool",
      description: "Mediocampista versátil con llegada al gol. Pieza fundamental en el esquema de Scaloni.",
      image: "/macallister.png?height=200&width=300",
    },
    {
      name: "Julián Álvarez",
      position: "Delantero",
      team: "Manchester City",
      description: "La 'Araña' Álvarez. Delantero con gran movilidad y definición. Anotó 4 goles en el Mundial 2022.",
      image: "/julian.png?height=200&width=300",
    },
    {
      name: "Franco Armani",
      position: "Arquero",
      team: "River Plate",
      description: "Portero experimentado y referente del fútbol argentino. Campeón del mundo en Qatar 2022.",
      image: "/armani.png?height=200&width=300",
    },
    {
      name: "Gerónimo Rulli",
      position: "Arquero",
      team: "Ajax",
      description: "Portero con gran juego con los pies. Parte del plantel campeón del mundo en Qatar 2022.",
      image: "/rulli.png?height=200&width=300",
    },
    {
      name: "Juan Foyth",
      position: "Defensor",
      team: "Villarreal",
      description: "Defensor versátil capaz de jugar como central o lateral. Campeón del mundo en Qatar 2022.",
      image: "/foyth.png?height=200&width=300",
    },
    {
      name: "Gonzalo Montiel",
      position: "Lateral Derecho",
      team: "Nottingham Forest",
      description: "Autor del penal decisivo en la final del Mundial 2022. Defensor sólido y confiable.",
      image: "/montiel.png?height=200&width=300",
    },
    {
      name: "Germán Pezzella",
      position: "Defensor Central",
      team: "Real Betis",
      description: "Defensor experimentado con buen juego aéreo. Campeón del mundo en Qatar 2022.",
      image: "/pezzella.png?height=200&width=300",
    },
    {
      name: "Marcos Acuña",
      position: "Lateral Izquierdo",
      team: "Sevilla",
      description: "Conocido como 'el Huevo'. Lateral con gran capacidad física y ofensiva.",
      image: "/acuña.png?height=200&width=300",
    },
    {
      name: "Lisandro Martínez",
      position: "Defensor Central",
      team: "Manchester United",
      description: "Apodado 'el Carnicero'. Defensor aguerrido con excelente salida de balón.",
      image: "/lisandro.png?height=200&width=300",
    },
    {
      name: "Leandro Paredes",
      position: "Mediocampista",
      team: "Roma",
      description: "Mediocampista con gran visión de juego y precisión en los pases largos.",
      image: "/paredes.png?height=200&width=300",
    },
    {
      name: "Exequiel Palacios",
      position: "Mediocampista",
      team: "Bayer Leverkusen",
      description: "Mediocampista versátil con buen manejo de balón y capacidad de recuperación.",
      image: "/palacios.png?height=200&width=300",
    },
    {
      name: "Guido Rodríguez",
      position: "Mediocampista",
      team: "Real Betis",
      description: "Mediocampista defensivo con gran capacidad de recuperación y buen posicionamiento.",
      image: "/guido.png?height=200&width=300",
    },
    {
      name: "Paulo Dybala",
      position: "Delantero",
      team: "Roma",
      description: "La 'Joya'. Delantero técnico con gran calidad en el último pase y definición.",
      image: "/dybala.png?height=200&width=300",
    },
    {
      name: "Lautaro Martínez",
      position: "Delantero",
      team: "Inter de Milán",
      description:
        "El 'Toro'. Delantero potente con gran definición. Anotó el penal decisivo contra Países Bajos en Qatar 2022.",
      image: "/lautaro.png?height=200&width=300",
    },
    {
      name: "Ángel Correa",
      position: "Delantero",
      team: "Atlético Madrid",
      description: "Delantero versátil con gran movilidad y capacidad de desequilibrio en espacios reducidos.",
      image: "/correa.png?height=200&width=300",
    },
    {
      name: "Thiago Almada",
      position: "Mediocampista Ofensivo",
      team: "Atlanta United",
      description:
        "Joven talento con gran técnica y visión de juego. El jugador más joven del plantel campeón del mundo.",
      image: "/almada.png?height=200&width=300",
    },
    {
      name: "Alejandro 'Papu' Gómez",
      position: "Mediocampista Ofensivo",
      team: "Monza",
      description: "Jugador experimentado con gran calidad técnica. Campeón de América en 2021 y del mundo en 2022.",
      image: "/papu.png?height=200&width=300",
    },
  ]

  const achievements = [
    {
      name: "Copa Mundial FIFA 2022",
      description: "Campeones del mundo en Qatar 2022, superando a Francia en la final por penales.",
      image: "/mundial2022.png?height=200&width=300",
    },
    {
      name: "Copa América 2021",
      description: "Campeones de América en Brasil 2021, venciendo a Brasil en la final en el Maracaná.",
      image: "/copaamerica2021.png?height=200&width=300",
    },
    {
      name: "Finalissima 2022",
      description: "Campeones al derrotar a Italia, campeón de la Eurocopa, por 3-0 en Wembley.",
      image: "/finalissima2022.png?height=200&width=300",
    },
    {
      name: "Copa América 2024",
      description: "Bicampeones de América tras ganar la copa en Estados Unidos 2024.",
      image: "/copaamerica2024.png?height=200&width=300",
    },
    {
      name: "Mundial de Clubes 2024",
      description: "El equipo argentino de clubes más exitoso a nivel internacional.",
      image: "/mundialclubes.png?height=200&width=300",
    },
  ]

  const historySections = [
    {
      name: "Orígenes",
      description: "Los primeros pasos de la selección argentina desde su fundación y primeros torneos.",
      image: "/origenes.png?height=200&width=300",
    },
    {
      name: "Era Maradona",
      description: "El período dorado con Diego Maradona y la conquista del Mundial 1986.",
      image: "/maradona.png?height=200&width=300",
    },
    {
      name: "Era Messi",
      description: "La época gloriosa liderada por Lionel Messi y sus conquistas internacionales.",
      image: "/eramessi.png?height=200&width=300",
    },
    {
      name: "Estadísticas",
      description: "Récords, estadísticas y datos históricos de la selección argentina.",
      image: "/estadisticas.png?height=200&width=300",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-sky-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.png" width={50} height={50} className="rounded-full" alt="Logo AFA" />
            <h1 className="text-2xl font-bold text-sky-800">Selección Argentina</h1>
          </div>

          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <a href="#inicio" className="text-sky-700 hover:text-sky-500 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#jugadores" className="text-sky-700 hover:text-sky-500 transition-colors">
                  Jugadores
                </a>
              </li>
              <li>
                <a href="#logros" className="text-sky-700 hover:text-sky-500 transition-colors">
                  Logros
                </a>
              </li>
              <li>
                <a href="#historia" className="text-sky-700 hover:text-sky-500 transition-colors">
                  Historia
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-sky-700 hover:text-sky-500 transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-sky-700 hover:text-sky-500 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-16 md:py-24 bg-gradient-to-r from-sky-100 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-sky-800 mb-6">La Scaloneta: Campeones del Mundo</h2>
          <p className="text-xl md:text-2xl text-sky-700 max-w-3xl mx-auto">
            Pasión, gloria y orgullo nacional en cada partido
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-sky-700 mb-8">
              La Selección Argentina de Fútbol, también conocida como "La Albiceleste" o "La Scaloneta", es el equipo
              que representa a Argentina en las competiciones oficiales de fútbol masculino. Con tres Copas del Mundo y
              múltiples Copas América, es uno de los equipos más exitosos y respetados del mundo.
            </p>

            <div className="mt-12 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/campeones2022.png?height=500&width=1000"
                alt="Argentina Campeón del Mundo 2022"
                width={1000}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Players Section */}
      <section id="jugadores" className="py-16 md:py-24 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 text-center mb-12">Nuestros Jugadores</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {players.map((player, index) => (
              <PlayerCard
                key={index}
                name={player.name}
                image={player.image}
                position={player.position}
                team={player.team}
                description={player.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="logros" className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 text-center mb-12">Logros y Títulos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                name={achievement.name}
                description={achievement.description}
                image={achievement.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="historia" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 text-center mb-12">Historia</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {historySections.map((section, index) => (
              <HistorySection key={index} name={section.name} description={section.description} image={section.image} />
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="nosotros" className="py-16 md:py-24 bg-gradient-to-r from-sky-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-800 text-center mb-12">Sobre La Selección</h2>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <p className="text-lg text-sky-700 mb-6">
                Con <span className="font-bold">más de 100 años de historia</span>, la Selección Argentina de Fútbol es
                una de las más exitosas y reconocidas del mundo, con tres títulos mundiales (1978, 1986 y 2022).
              </p>

              <p className="text-lg text-sky-700 mb-6">
                La Albiceleste ha tenido el privilegio de contar entre sus filas con algunos de los mejores jugadores de
                la historia, como Alfredo Di Stéfano, Diego Armando Maradona y Lionel Messi, quien ha llevado al equipo
                a una nueva era dorada.
              </p>

              <p className="text-lg text-sky-700">
                Con la dirección técnica de Lionel Scaloni, Argentina ha conseguido tres títulos en tres años: la Copa
                América 2021, la Finalissima 2022 y la Copa del Mundo 2022, consolidándose como una potencia
                futbolística mundial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 md:py-24 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 text-center mb-12">Contáctanos</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-sky-700 mb-6">Información de Contacto</h3>

              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <MessageCircle className="text-sky-600" />
                  <span>WhatsApp: </span>
                  <a href={whatsappUrl} className="text-sky-600 hover:underline">
                    {whatsappNumber}
                  </a>
                </p>

                <p className="flex items-center gap-3">
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
                    className="text-sky-600"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>Email: </span>
                  <a href="mailto:contacto@afa.org.ar" className="text-sky-600 hover:underline">
                    contacto@afa.org.ar
                  </a>
                </p>

                <div className="flex items-center gap-3">
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
                    className="text-sky-600"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Ubicación: </span>
                </div>
                <address className="not-italic pl-10 text-sky-700">
                  Av. Presidente Figueroa Alcorta 7597, Buenos Aires, Argentina
                </address>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-sky-700 mb-6">Síguenos</h3>

                <div className="flex gap-4">
                  <a href="#" className="bg-sky-100 hover:bg-sky-200 transition-colors p-3 rounded-full">
                    <Instagram className="text-sky-700 h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </a>

                  <a href="#" className="bg-sky-100 hover:bg-sky-200 transition-colors p-3 rounded-full">
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
                      className="text-sky-700 h-6 w-6"
                    >
                      <path d="M9 12 11 14 15 10" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    <span className="sr-only">TikTok</span>
                  </a>

                  <a href="#" className="bg-sky-100 hover:bg-sky-200 transition-colors p-3 rounded-full">
                    <Youtube className="text-sky-700 h-6 w-6" />
                    <span className="sr-only">YouTube</span>
                  </a>

                  <a href="#" className="bg-sky-100 hover:bg-sky-200 transition-colors p-3 rounded-full">
                    <Facebook className="text-sky-700 h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-sky-700 mb-6">Envíanos un Mensaje</h3>
              <ContactForm whatsappNumber={whatsappNumber} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-800 to-sky-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Logo and About */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" width={60} height={60} className="rounded-full" alt="Logo AFA" />
                <h2 className="text-2xl font-bold">Selección Argentina</h2>
              </div>
              <p className="text-blue-100 text-sm">
                La Selección Argentina de Fútbol, campeona del mundo y de América, representa la pasión y el orgullo de
                todo un país.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b border-blue-400 pb-2">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-blue-100 hover:text-white transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#jugadores" className="text-blue-100 hover:text-white transition-colors">
                    Jugadores
                  </a>
                </li>
                <li>
                  <a href="#logros" className="text-blue-100 hover:text-white transition-colors">
                    Logros
                  </a>
                </li>
                <li>
                  <a href="#historia" className="text-blue-100 hover:text-white transition-colors">
                    Historia
                  </a>
                </li>
                <li>
                  <a href="#nosotros" className="text-blue-100 hover:text-white transition-colors">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-blue-100 hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b border-blue-400 pb-2">Contacto</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-300" />
                  <span className="text-blue-100">Av. Presidente Figueroa Alcorta 7597, Buenos Aires</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-blue-300" />
                  <span className="text-blue-100">+54 11 4789-1200</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-blue-300" />
                  <a href="mailto:contacto@afa.org.ar" className="text-blue-100 hover:text-white transition-colors">
                    contacto@afa.org.ar
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-blue-300" />
                  <a href={whatsappUrl} className="text-blue-100 hover:text-white transition-colors">
                    {whatsappNumber}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Social Media and Newsletter */}
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b border-blue-400 pb-2">Síguenos</h3>
              <div className="flex gap-4 mb-6">
                <a href="#" className="bg-blue-700 hover:bg-blue-600 transition-colors p-2 rounded-full">
                  <Instagram className="text-white h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="bg-blue-700 hover:bg-blue-600 transition-colors p-2 rounded-full">
                  <Twitter className="text-white h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="bg-blue-700 hover:bg-blue-600 transition-colors p-2 rounded-full">
                  <Youtube className="text-white h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </a>
                <a href="#" className="bg-blue-700 hover:bg-blue-600 transition-colors p-2 rounded-full">
                  <Facebook className="text-white h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </div>

              <h4 className="font-medium mb-2">Suscríbete al Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="px-3 py-2 rounded-l-md text-gray-800 w-full focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-r-md transition-colors"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-blue-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-blue-200 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Asociación del Fútbol Argentino. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton whatsappNumber={whatsappNumber} />
    </main>
  )
}

