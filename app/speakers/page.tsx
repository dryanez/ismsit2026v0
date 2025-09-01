import ResponsiveNavigation from "@/components/ResponsiveNavigation";
import { Roboto_Condensed, Orbitron } from "next/font/google"

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-condensed",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
})

export default function Speakers() {
  const speakerImages = [
    "/speaker-1.svg",
    "/speaker-2.svg",
    "/speaker-3.svg",
  ];

  const speakersData = [
    { name: "Prof. Michele Diana", affiliation: "IRCAD Institute, Strasbourg" },
    { name: "Prof. Dr. Tobias Keck", affiliation: "President, German Society for General and Visceral Surgery (DGAV)" },
    { name: "Prof. Dr.-Ing. Michael Priebe", affiliation: "Angel Investor / MedTech" },
    { name: "Prof. Andrew A. Gumbs", affiliation: "Editor-in-Chief, Artificial Intelligence Surgery" },
    { name: "Prof. Dr. med. Roland Goldbrunner", affiliation: "President, German Society of Surgery (DGCH) 2025/26" },
    { name: "Prof. Krzysztof Zieniewicz, MD, PhD", affiliation: "President, Polish Society of Surgery (PTCh)" },
    { name: "Univ.-Prof. Dr. med. Marcus Lehnhardt", affiliation: "President, German Society of Plastic, Reconstructive and Aesthetic Surgeons (DGPRÄC)" },
    { name: "Univ.-Prof. Dr. med. Matthias Rab", affiliation: "President, German-speaking Association for Microsurgery (DAM)" },
    { name: "Prof. Dr. med. Christoph Hirche", affiliation: "Plastic and Reconstructive Surgery / Microsurgery" },
    { name: "Dr. Max Kückelhaus", affiliation: "Young Faculty, Plastic Surgery (DGPRÄC)" },
    { name: "Prof. Zbigniew Nawrat", affiliation: "President, Foundation for Cardiac Surgery Development (FRK), Pioneer in Cardiotechnology and Robotic Surgery (Zabrze)" },
    { name: "Prof. Dr. med. Uwe Spetzger", affiliation: "Director, Department of Neurosurgery, Städtisches Klinikum Karlsruhe. Past President of iSMIT" },
    { name: "Prof. Francesco Papadia", affiliation: "Gynecologic Oncology and Minimally Invasive Surgery, University of Genoa" },
    { name: "Prof. Przemysław Czuma", affiliation: "Orthopaedic Surgeon, President, Polish Association for Artificial Intelligence in Medicine (PSSiM)" },
    { name: "Prof. Walter Greenleaf", affiliation: "Pioneer in Virtual Reality in Medicine, Digital Health & Neuropsychology" },
    { name: "Prof. Antoni Szczepanik", affiliation: "Surgical Oncology, Jagiellonian University Collegium Medicum, Krakow, Past President of European Surgical Association (ESA)" },
  ].map((speaker, index) => ({
    ...speaker,
    imageSrc: speakerImages[index % speakerImages.length],
  }));

  return (
    <div className={`${robotoCondensed.variable} ${orbitron.variable} min-h-screen bg-white`}>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2eniT8eW-yIJxNvDrn9TosGzHhFJMfYWVtWYOTq.jpeg"
            alt="Medical professionals in geometric low-poly style"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#FE6448] bg-opacity-70"></div>
        </div>

        {/* Navigation */}
        {/* Navigation */}
        <ResponsiveNavigation
          links={[
            { href: "/", label: "Home" },
            { href: "/registration", label: "Registration" },
            { href: "/about", label: "About" },
            { href: "/program", label: "Program" },
            { href: "/speakers", label: "Speakers", isActive: true },
            { href: "/submissions", label: "Submissions" },
            { href: "/pavilions", label: "Pavilions" },
          ]}
          logoSrc="/ISMIT REAL LOGO 1.svg"
          logoAlt="iSMIT Logo"
          desktopBgClass="bg-[#0D1858]"
          mobileBgClass="bg-[#0D1858]"
          textColorClass="text-white"
          activeLinkClass="text-[#FE6448]"
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-orbitron font-black text-white text-shadow-lg uppercase mb-8">
            Keynote Speakers
          </h1>
          <p className="text-xl md:text-3xl font-roboto-condensed font-medium text-white uppercase mb-8">
            Visionary Voices in Medical Technology
          </p>
        </div>
      </section>

      {/* Speakers Content */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-orbitron font-bold text-[#0D1858] uppercase mb-6">
              World-Renowned Pioneers
            </h2>
            <p className="text-lg font-roboto-condensed text-[#0D1858] mb-4">
              We are honored to host a lineup of world-renowned pioneers and thought leaders.
            </p>
            <p className="text-sm font-roboto-condensed text-[#FE6448] uppercase">
              Final confirmations pending - Updated monthly
            </p>
          </div>

          {/* Featured Speakers Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {speakersData.map((speaker, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={speaker.imageSrc}
                  alt={speaker.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-orbitron font-bold text-[#0D1858] mb-2">{speaker.name}</h3>
                  <p className="text-[#85AFFB] font-roboto-condensed font-semibold mb-2">{speaker.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
