import Image from "next/image";
import Link from "next/link";
import EpisodeCard from "@/components/EpisodeCard";
import FadeIn from "@/components/FadeIn";
import { episodes } from "@/data/episodes";

export default function Home() {
  const latestEpisodes = episodes.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-[rgba(35,15,10,0.55)]" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Your money.
            <br />
            <span className="italic text-terracotta">Your story.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-xl leading-relaxed">
            A personal finance podcast for people who want to be the main
            character of their financial life — not a side character in someone
            else&apos;s.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link
              href="#"
              className="bg-terracotta hover:bg-terracotta/90 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Listen Now
            </Link>
            <Link
              href="#about"
              className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-terracotta">
        <FadeIn>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-white/70 font-semibold text-sm tracking-widest uppercase mb-4">
              About the Show
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight text-white">
              Money talk for teens and{" "}
              <span className="italic text-yellow-300">everybody</span> else
            </h2>
            <p className="mt-6 text-white/80 leading-relaxed">
              A teenager and her dad get together to have real conversations about
              money. Making it, saving it and growing it. Showing teens and their
              parents how to manage money doesn&apos;t need to be complicated. We
              make it fun, and show you exactly what steps you can take to set
              yourself up for a strong financial future. No gatekeeping, no shame —
              just two people figuring it out and sharing what works.
            </p>
          </div>
        </FadeIn>

        {/* Host Cards */}
        <FadeIn>
          <div className="max-w-5xl mx-auto px-6 mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <Image
                src="/images/cana.jpg"
                alt="Cana"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-card-foreground">Cana</h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">
                A 15-year-old high school student who loves adventures and the
                beach. She&apos;s a high school athlete and club volleyball player
                ready to take on the world — and her finances.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <Image
                src="/images/rich.jpg"
                alt="Rich"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-card-foreground">Rich</h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">
                Cana&apos;s dad who loves sportsball, surfing, and adventures. He
                works in tech marketing and operations — and is on a mission to
                make sure his daughter wins with money.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Latest Episodes */}
      <section className="py-20 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-sage font-semibold text-sm tracking-widest uppercase mb-2">
                  Latest Episodes
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  Tune in
                </h2>
              </div>
              <Link
                href="/episodes"
                className="text-terracotta font-semibold text-sm hover:underline flex items-center gap-1"
              >
                View all episodes &rarr;
              </Link>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {latestEpisodes.map((ep) => (
                <EpisodeCard key={ep.number} episode={ep} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-500">
        <FadeIn>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white italic leading-tight">
              Ready to be the main character?
            </h2>
            <p className="mt-4 text-white/80 text-lg">
              Subscribe wherever you listen to podcasts and join us on the journey
              to financial freedom.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link
                href="#"
                className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-3 rounded-full border border-white/30 transition-colors"
              >
                Spotify
              </Link>
              <Link
                href="#"
                className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-3 rounded-full border border-white/30 transition-colors"
              >
                Apple Podcasts
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
