ts

import "./episodes.css";  // on the list page
import "../episodes.css"; // on the [slug]/page.tsx (one level up)

import Link from "next/link";
import { episodes } from "@/lib/episodes";

export const metadata = {
  title: "All Episodes | Main Character Money",
  description:
    "Every episode of the Main Character Money podcast. Binge them all or pick the topics that speak to you.",
};

export default function EpisodesPage() {
  return (
    <main className="episodes-page">
      <section className="episodes-hero">
        <p className="episodes-label">All Episodes</p>
        <h1>Every episode, one place</h1>
        <p className="episodes-subtitle">
          Binge them all or pick the topics that speak to you. Either way,
          you&apos;re making a power move.
        </p>
      </section>

      <section className="episodes-list">
        {episodes.map((ep) => (
          <Link
            key={ep.id}
            href={`/episodes/${ep.slug}`}
            className="episode-card"
          >
            <div className="episode-meta">
              <span className="episode-number">EP {ep.id}</span>
              <span className="episode-date">{ep.date}</span>
              <span className="episode-dot">·</span>
              <span className="episode-duration">{ep.duration}</span>
            </div>
            <h2 className="episode-title">{ep.title}</h2>
            <p className="episode-description">{ep.description}</p>
            <div className="episode-footer">
              <div className="episode-tags">
                {ep.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="episode-listen">Listen →</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
