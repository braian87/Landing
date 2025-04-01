import Image from "next/image"
import { Facebook, Instagram, MessageCircle, Youtube } from "lucide-react"
import ContactForm from "@/components/contact-form"
import PlayerCard from "@/components/player-card"
import AchievementCard from "@/components/achievement-card"
import HistorySection from "@/components/history-section"
import WhatsAppButton from "@/components/whatsapp-button"
import MobileMenu from "@/components/mobile-menu"
import WorldCupCard from "@/components/world-cup-card"
import CopaAmericaCard from "@/components/copa-america-card"
import FinalCard from "@/components/final-card"
import RecordCard from "@/components/record-card"

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

  // Datos de los Mundiales
  const worldCups = [
    {
      year: "2022",
      host: "Qatar",
      result: "Campeón",
      position: "1°",
      coach: "Lionel Scaloni",
      topScorer: "Lionel Messi (7 goles)",
      goals: "15 goles en 7 partidos",
      image: "/mundial2022.png?height=200&width=300",
      details:
        "Argentina logró su tercera Copa del Mundo tras vencer a Francia en una épica final que terminó 3-3 y se definió por penales (4-2). Messi fue elegido el mejor jugador del torneo, anotando en todos los partidos de eliminación directa, incluido un doblete en la final. El equipo superó a Australia (2-1), Países Bajos (penales tras 2-2) y Croacia (3-0) en su camino a la gloria.",
    },
    {
      year: "1986",
      host: "México",
      result: "Campeón",
      position: "1°",
      coach: "Carlos Bilardo",
      topScorer: "Diego Maradona (5 goles)",
      goals: "14 goles en 7 partidos",
      image: "/mundial1986.png?height=200&width=300",
      details:
        "Argentina conquistó su segunda Copa del Mundo con Diego Maradona como figura estelar. El '10' brilló especialmente en cuartos de final contra Inglaterra con los dos goles más famosos de la historia: 'La Mano de Dios' y el considerado 'Gol del Siglo'. En semifinales, venció a Bélgica (2-0) y en la final derrotó a Alemania Federal por 3-2 con goles de Brown, Valdano y Burruchaga.",
    },
    {
      year: "1978",
      host: "Argentina",
      result: "Campeón",
      position: "1°",
      coach: "César Luis Menotti",
      topScorer: "Mario Kempes (6 goles)",
      goals: "15 goles en 7 partidos",
      image: "/mundial1978.png?height=200&width=300",
      details:
        "Argentina ganó su primera Copa del Mundo como anfitrión. Tras superar la primera fase, venció a Polonia, Brasil y Perú en la segunda ronda para clasificar a la final. En un partido memorable contra Países Bajos, Argentina se impuso 3-1 en tiempo extra con dos goles de Mario Kempes, quien fue el goleador y mejor jugador del torneo. Daniel Bertoni anotó el tercer gol que selló la victoria.",
    },
    {
      year: "2014",
      host: "Brasil",
      result: "Subcampeón",
      position: "2°",
      coach: "Alejandro Sabella",
      topScorer: "Lionel Messi (4 goles)",
      goals: "8 goles en 7 partidos",
      image: "/mundial2014.png?height=200&width=300",
      details:
        "Argentina llegó a su quinta final mundialista, pero cayó ante Alemania por 1-0 en tiempo extra con gol de Götze. El equipo mostró gran solidez defensiva durante todo el torneo, eliminando a Suiza, Bélgica y Países Bajos en su camino a la final. Messi fue elegido mejor jugador del torneo, aunque la decisión generó controversia. Javier Mascherano destacó como pieza clave en el mediocampo.",
    },
    {
      year: "1990",
      host: "Italia",
      result: "Subcampeón",
      position: "2°",
      coach: "Carlos Bilardo",
      topScorer: "Claudio Caniggia (2 goles)",
      goals: "5 goles en 7 partidos",
      image: "/mundial1990.png?height=200&width=300",
      details:
        "Argentina alcanzó su tercera final consecutiva, pero perdió 1-0 ante Alemania Federal con un polémico penal convertido por Andreas Brehme. El equipo, liderado por Maradona (quien jugó lesionado), mostró gran carácter al eliminar a Brasil en octavos, a Yugoslavia por penales en cuartos y a Italia también por penales en semifinales, en el estadio San Paolo de Nápoles.",
    },
    {
      year: "2006",
      host: "Alemania",
      result: "Cuartos de final",
      position: "6°",
      coach: "José Pekerman",
      topScorer: "Hernán Crespo (3 goles)",
      goals: "11 goles en 5 partidos",
      image: "/mundial2006.png?height=200&width=300",
      details:
        "Argentina mostró un gran nivel de juego, especialmente en la fase de grupos y en octavos de final contra México (2-1 en tiempo extra). En cuartos se enfrentó a Alemania y, tras empatar 1-1, cayó en la tanda de penales. El partido quedó marcado por la polémica decisión de Pekerman de no hacer ingresar a Lionel Messi y sacar a Juan Román Riquelme en los minutos finales.",
    },
  ]

  // Datos de las Copas América
  const copaAmericas = [
    {
      year: "2024",
      host: "Estados Unidos",
      result: "Campeón",
      position: "1°",
      coach: "Lionel Scaloni",
      topScorer: "Lautaro Martínez (5 goles)",
      goals: "12 goles en 6 partidos",
      image: "/copaamerica2024.png?height=200&width=300",
      details:
        "Argentina revalidó su título continental con un equipo sólido liderado por Messi, quien a pesar de sufrir una lesión en la final, fue clave en el torneo. El equipo venció a Chile, Perú y Canadá en fase de grupos, a Ecuador en cuartos, a Canadá en semifinales y a Colombia en la final con gol de Lautaro Martínez en tiempo extra. 'El Toro' fue el goleador del torneo.",
    },
    {
      year: "2021",
      host: "Brasil",
      result: "Campeón",
      position: "1°",
      coach: "Lionel Scaloni",
      topScorer: "Lionel Messi (4 goles)",
      goals: "12 goles en 7 partidos",
      image: "/copaamerica2021.png?height=200&width=300",
      details:
        "Argentina rompió una sequía de 28 años sin títulos al vencer a Brasil 1-0 en el Maracaná con gol de Ángel Di María. Messi logró su primer título con la selección mayor y fue elegido mejor jugador y goleador del torneo. El equipo mostró solidez defensiva y eficacia ofensiva, con destacadas actuaciones de Rodrigo De Paul, Emiliano Martínez y Giovani Lo Celso.",
    },
    {
      year: "1993",
      host: "Ecuador",
      result: "Campeón",
      position: "1°",
      coach: "Alfio Basile",
      topScorer: "Gabriel Batistuta (6 goles)",
      goals: "11 goles en 6 partidos",
      image: "/copaamerica1993.png?height=200&width=300",
      details:
        "Argentina revalidó su título de 1991 con un equipo que combinaba experiencia y juventud. Tras superar la fase de grupos, venció a Brasil por 6-5 en penales en cuartos de final y a Colombia por 2-1 en semifinales. En la final derrotó a México por 2-1 con goles de Batistuta y Balbo. Destacaron figuras como Redondo, Simeone y Caniggia.",
    },
    {
      year: "1991",
      host: "Chile",
      result: "Campeón",
      position: "1°",
      coach: "Alfio Basile",
      topScorer: "Gabriel Batistuta (6 goles)",
      goals: "16 goles en 7 partidos",
      image: "/copaamerica1991.png?height=200&width=300",
      details:
        "Argentina conquistó su decimotercera Copa América con un equipo renovado tras el Mundial de 1990. Ganó todos sus partidos en la fase de grupos y en la fase final venció a Chile (2-0) y a Colombia (2-1) antes de derrotar a Brasil en la final por 3-2 con un doblete de Claudio Caniggia y un gol de Darío Franco. Batistuta fue el goleador del torneo.",
    },
    {
      year: "1959",
      host: "Argentina",
      result: "Campeón",
      position: "1°",
      coach: "José Manuel Moreno",
      topScorer: "José Sanfilippo (5 goles)",
      goals: "11 goles en 4 partidos",
      image: "/copaamerica1959.png?height=200&width=300",
      details:
        "Argentina ganó su duodécima Copa América como anfitrión en un torneo donde participaron solo siete equipos. El formato fue de todos contra todos, y Argentina se coronó campeón tras ganar todos sus partidos. Destacaron figuras como José Sanfilippo, quien fue el goleador del torneo, y Amadeo Carrizo en el arco.",
    },
  ]

  // Datos de las Finales
  const finals = [
    {
      tournament: "Copa Mundial FIFA",
      year: "2022",
      opponent: "Francia",
      result: "3-3 (4-2 penales)",
      venue: "Estadio Lusail, Qatar",
      scorers: "Messi (2), Di María",
      image: "/final-mundial2022.png?height=200&width=300",
      details:
        "Una de las mejores finales de la historia. Argentina dominó y se puso 2-0 con goles de Messi y Di María. Francia empató con doblete de Mbappé. En el tiempo extra, Messi volvió a adelantar a Argentina, pero Mbappé igualó de penal. En la tanda, el 'Dibu' Martínez fue figura y Montiel convirtió el penal decisivo para el 4-2 final.",
    },
    {
      tournament: "Copa América",
      year: "2024",
      opponent: "Colombia",
      result: "1-0 (prórroga)",
      venue: "Hard Rock Stadium, Miami",
      scorers: "Lautaro Martínez",
      image: "/final-copaamerica2024.png?height=200&width=300",
      details:
        "Final muy disputada donde Messi sufrió una lesión en el tobillo que lo obligó a jugar con limitaciones. El partido fue muy físico y llegó a la prórroga sin goles. En el minuto 112, Lautaro Martínez definió con calidad tras una gran asistencia de Lo Celso para dar a Argentina su decimosexto título continental.",
    },
    {
      tournament: "Copa América",
      year: "2021",
      opponent: "Brasil",
      result: "1-0",
      venue: "Estadio Maracaná, Río de Janeiro",
      scorers: "Ángel Di María",
      image: "/final-copaamerica2021.png?height=200&width=300",
      details:
        "Argentina rompió una sequía de 28 años sin títulos en el templo del fútbol brasileño. A los 22 minutos, Di María definió con una exquisita vaselina tras un pase largo de De Paul. La defensa argentina, con un 'Dibu' Martínez inspirado, contuvo los ataques de Brasil para darle a Messi su primer título con la selección mayor.",
    },
    {
      tournament: "Finalissima",
      year: "2022",
      opponent: "Italia",
      result: "3-0",
      venue: "Estadio de Wembley, Londres",
      scorers: "Lautaro Martínez, Di María, Dybala",
      image: "/final-finalissima2022.png?height=200&width=300",
      details:
        "Argentina dominó de principio a fin al campeón de Europa. Lautaro abrió el marcador tras una gran jugada colectiva, Di María amplió con una definición exquisita antes del descanso y Dybala selló la goleada en el último minuto. Una exhibición de fútbol que confirmó el excelente momento del equipo de Scaloni.",
    },
    {
      tournament: "Copa Mundial FIFA",
      year: "2014",
      opponent: "Alemania",
      result: "0-1 (prórroga)",
      venue: "Estadio Maracaná, Río de Janeiro",
      scorers: "-",
      image: "/final-mundial2014.png?height=200&width=300",
      details:
        "Argentina tuvo las mejores ocasiones en los 90 minutos con Higuaín, Messi y Palacio, pero no logró convertir. En el minuto 113, Götze controló un centro de Schürrle y definió ante Romero para dar el título a Alemania. Messi fue elegido mejor jugador del torneo, aunque la decisión generó controversia.",
    },
  ]

  // Datos de los Récords
  const records = [
    {
      title: "Máximo goleador",
      description: "Récord de más goles con la selección argentina en partidos oficiales y amistosos.",
      holder: "Lionel Messi",
      value: "106 goles",
      image: "/record-messi-goles.png?height=200&width=300",
    },
    {
      title: "Más partidos",
      description: "Récord de más partidos disputados con la camiseta albiceleste.",
      holder: "Lionel Messi",
      value: "180 partidos",
      image: "/record-messi-partidos.png?height=200&width=300",
    },
    {
      title: "Más títulos como DT",
      description: "Entrenador con más títulos oficiales al frente de la selección argentina.",
      holder: "Lionel Scaloni",
      value: "3 títulos (Mundial 2022, Copa América 2021 y 2024)",
      image: "/record-scaloni.png?height=200&width=300",
    },
    {
      title: "Mayor goleada",
      description: "Victoria más abultada en la historia de la selección argentina.",
      holder: "Argentina vs. Ecuador (1941)",
      value: "12-0",
      image: "/record-goleada.png?height=200&width=300",
    },
    {
      title: "Más Copas América",
      description: "Selección con más títulos en la Copa América, junto con Uruguay.",
      holder: "Argentina",
      value: "15 títulos",
      image: "/record-copas-america.png?height=200&width=300",
    },
    {
      title: "Invicto más largo",
      description: "Mayor cantidad de partidos consecutivos sin perder.",
      holder: "Selección de Scaloni (2019-2022)",
      value: "36 partidos",
      image: "/record-invicto.png?height=200&width=300",
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
                <a href="#mundiales" className="text-sky-700 hover:text-sky-500 transition-colors">
                  Mundiales
                </a>
              </li>
              <li>
                <a href="#copas-america" className="text-sky-700 hover:text-sky-500 transition-colors">
                  Copas América
                </a>
              </li>
              <li>
                <a href="#finales" className="text-sky-700 hover:text-sky-500 transition-colors">
                  Finales
                </a>
              </li>
              <li>
                <a href="#records" className="text-sky-700 hover:text-sky-500 transition-colors">
                  Récords
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

      {/* World Cups Section */}
      <section id="mundiales" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 text-center mb-12">Mundiales</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {worldCups.map((worldCup, index) => (
              <WorldCupCard
                key={index}
                year={worldCup.year}
                host={worldCup.host}
                result={worldCup.result}
                position={worldCup.position}
                coach={worldCup.coach}
                topScorer={worldCup.topScorer}
                goals={worldCup.goals}
                image={worldCup.image}
                details={worldCup.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Copa America Section */}
      <section id="copas-america" className="py-16 md:py-24 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 text-center mb-12">Copas América</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {copaAmericas.map((copaAmerica, index) => (
              <CopaAmericaCard
                key={index}
                year={copaAmerica.year}
                host={copaAmerica.host}
                result={copaAmerica.result}
                position={copaAmerica.position}
                coach={copaAmerica.coach}
                topScorer={copaAmerica.topScorer}
                goals={copaAmerica.goals}
                image={copaAmerica.image}
                details={copaAmerica.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Finals Section */}
      <section id="finales" className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 text-center mb-12">Finales Históricas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {finals.map((final, index) => (
              <FinalCard
                key={index}
                tournament={final.tournament}
                year={final.year}
                opponent={final.opponent}
                result={final.result}
                venue={final.venue}
                scorers={final.scorers}
                image={final.image}
                details={final.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Records Section */}
      <section id="records" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 text-center mb-12">Récords</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {records.map((record, index) => (
              <RecordCard
                key={index}
                title={record.title}
                description={record.description}
                holder={record.holder}
                value={record.value}
                image={record.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="historia" className="py-16 md:py-24 bg-sky-50">
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
      <footer className="bg-sky-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <img src="/logo.png" width={50} height={50} className="rounded-full" alt="Logo AFA" />
              <h2 className="text-xl font-bold">Selección Argentina</h2>
            </div>

            <p className="text-sm text-sky-200">
              &copy; {new Date().getFullYear()} Asociación del Fútbol Argentino. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton whatsappNumber={whatsappNumber} />
    </main>
  )
}

