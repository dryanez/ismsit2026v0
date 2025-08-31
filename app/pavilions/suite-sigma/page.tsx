import { Roboto_Condensed, Orbitron } from "next/font/google"
import Link from "next/link"

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

export default function SuiteSigma() {
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
          <div className="absolute inset-0 bg-[#FE6448] bg-opacity-80"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 px-4 md:px-8 lg:px-36 pt-8">
          <div className="bg-[#0D1858] rounded-lg px-8 py-3">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-8">
              <Link href="/" className="text-white text-sm font-orbitron font-black uppercase hover:underline">
                Home
              </Link>
              <Link
                href="/registration"
                className="text-white text-sm font-orbitron font-black uppercase hover:underline"
              >
                Registration
              </Link>
              <Link href="/about" className="text-white text-sm font-orbitron font-black uppercase hover:underline">
                About
              </Link>
              <Link href="/program" className="text-white text-sm font-orbitron font-black uppercase hover:underline">
                Program
              </Link>
              <Link href="/speakers" className="text-white text-sm font-orbitron font-black uppercase hover:underline">
                Speakers
              </Link>
              <Link
                href="/submissions"
                className="text-white text-sm font-orbitron font-black uppercase hover:underline"
              >
                Submissions
              </Link>
              <Link href="/pavilions" className="text-white text-sm font-orbitron font-black uppercase hover:underline">
                Pavilions
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-orbitron font-black text-white text-shadow-lg uppercase mb-4">
            Suite Σ
          </h1>
          <h2 className="text-2xl md:text-4xl font-orbitron font-bold text-white uppercase mb-8">(Sigma)</h2>
          <p className="text-xl md:text-3xl font-roboto-condensed font-medium text-white uppercase mb-8">
            Startup Innovation Hub
          </p>
          <p className="text-lg md:text-xl font-roboto-condensed text-white max-w-4xl">
            Where medicine, robotics and data converge in an entrepreneurial crucible
          </p>
        </div>
      </section>

      {/* Main Description */}
      <section className="bg-[#0D1858] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg md:text-xl font-roboto-condensed text-white leading-relaxed">
            Suite Σ (Sigma) ignites an entrepreneurial crucible where medicine, robotics and data converge. Powered by
            our leading Bavarian cluster innovation partner, fearless, handpicked startups storm a mortal combat pitch
            arena, each allotted <strong>three electrifying minutes</strong> to prove clinical impact, scalability and
            regulatory savvy. Elite investors, surgeons, AI pioneers and venture journalists sit ringside, scoring live
            and virtually.
          </p>
        </div>
      </section>

      {/* Event Details */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Where */}
            <div className="text-center">
              <div className="bg-[#FE6448] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-orbitron font-bold text-xl">📍</span>
              </div>
              <h3 className="text-xl font-orbitron font-bold text-[#0D1858] uppercase mb-2">Where?</h3>
              <p className="font-roboto-condensed text-[#0D1858] text-lg">Suite Σ (Sigma)</p>
            </div>

            {/* What */}
            <div className="text-center">
              <div className="bg-[#85AFFB] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-orbitron font-bold text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-orbitron font-bold text-[#0D1858] uppercase mb-2">What?</h3>
              <p className="font-roboto-condensed text-[#0D1858] text-lg">Everything about Start‑ups</p>
            </div>

            {/* When */}
            <div className="text-center">
              <div className="bg-[#FE6448] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-orbitron font-bold text-xl">⏰</span>
              </div>
              <h3 className="text-xl font-orbitron font-bold text-[#0D1858] uppercase mb-2">When?</h3>
              <p className="font-roboto-condensed text-[#0D1858] text-lg">Events at 10:30 | 14:30</p>
            </div>

            {/* Why */}
            <div className="text-center">
              <div className="bg-[#85AFFB] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-orbitron font-bold text-xl">🏆</span>
              </div>
              <h3 className="text-xl font-orbitron font-bold text-[#0D1858] uppercase mb-2">Why?</h3>
              <p className="font-roboto-condensed text-[#0D1858] text-lg">
                Visibility, funding and instant credibility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Section */}
      <section className="bg-[#85AFFB] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-orbitron font-bold text-white uppercase mb-8">Who?</h2>
          <p className="text-lg font-roboto-condensed text-white leading-relaxed">
            Fearless founders on stage; a ringside jury of investors, surgeons, AI visionaries and tech journalists;
            plus a buzzing audience hungry for the next breakthrough.
          </p>
        </div>
      </section>

      {/* Programme Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-orbitron font-bold text-[#0D1858] uppercase mb-6">
              The Programme for Start-ups
            </h2>
            <p className="text-lg font-roboto-condensed text-[#0D1858]">Among other highlights</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#0D1858] rounded-lg p-6 text-white text-center">
              <h3 className="text-xl font-orbitron font-bold uppercase mb-4">Startup Coaching</h3>
              <p className="font-roboto-condensed">Expert guidance for your startup journey</p>
            </div>
            <div className="bg-[#FE6448] rounded-lg p-6 text-white text-center">
              <h3 className="text-xl font-orbitron font-bold uppercase mb-4">Pitch Like a Pro</h3>
              <p className="font-roboto-condensed">Master the art of compelling presentations</p>
            </div>
            <div className="bg-[#85AFFB] rounded-lg p-6 text-white text-center">
              <h3 className="text-xl font-orbitron font-bold uppercase mb-4">Startup Showcase</h3>
              <p className="font-roboto-condensed">Present your innovation to the world</p>
            </div>
            <div className="bg-[#FE6448] rounded-lg p-6 text-white text-center">
              <h3 className="text-xl font-orbitron font-bold uppercase mb-4">Intellectual Property</h3>
              <p className="font-roboto-condensed">Protect your innovations effectively</p>
            </div>
            <div className="bg-[#0D1858] rounded-lg p-6 text-white text-center">
              <h3 className="text-xl font-orbitron font-bold uppercase mb-4">Patents</h3>
              <p className="font-roboto-condensed">Navigate the patent landscape</p>
            </div>
            <div className="bg-[#85AFFB] rounded-lg p-6 text-white text-center">
              <h3 className="text-xl font-orbitron font-bold uppercase mb-4">From Idea to MVP</h3>
              <p className="font-roboto-condensed">Build your Minimum Viable Product</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Disruptors Contest */}
      <section className="bg-[#0D1858] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white uppercase mb-8">
            Future Disruptors Contest
          </h2>
          <p className="text-lg font-roboto-condensed text-white mb-8 leading-relaxed">
            Fearless founders pitch live; one champion wins the Grand Prize, a plenary spotlight at next year's iSMIT,
            and a guaranteed article slot in the AIS Journal. Expect adrenaline, ruthless questions, immersive demos and
            last-second pivots.
          </p>
          <p className="text-xl font-roboto-condensed font-bold text-[#FE6448] mb-8">
            Sharpen your deck, tighten your story — victory demands precision, courage and relentless execution.
          </p>

          <Link
            href="/startup-application"
            className="inline-block bg-[#FE6448] text-white px-12 py-4 rounded-lg font-orbitron font-bold uppercase text-lg hover:bg-[#e55439] transition-colors"
          >
            Apply for Competition
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#85AFFB] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-orbitron font-bold text-white uppercase mb-8">
            Ready to Take Part?
          </h2>
          <p className="text-lg font-roboto-condensed text-white mb-8">
            To take part in the Startup Innovation Hub competition, please send your data and registration number by
            email to:
          </p>
          <a
            href="mailto:startupcombat@iSMIT2026.com"
            className="inline-block bg-white text-[#85AFFB] px-8 py-4 rounded-lg font-orbitron font-bold uppercase text-lg hover:bg-gray-100 transition-colors"
          >
            startupcombat@iSMIT2026.com
          </a>
        </div>
      </section>
    </div>
  )
}
