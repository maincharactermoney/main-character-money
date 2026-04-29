  
import "../episodes.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { episodes, getEpisodeBySlug, getAdjacentEpisodes } from "@/lib/episodes";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return episodes.map((ep) => ({ slug: ep.slug }));
}

export async function generateMetadata({ params }: Props) {
  const episode = getEpisodeBySlug(params.slug);
  if (!episode) return {};
  return {
    title: `EP ${episode.id}: ${episode.title} | Main Character Money`,
    description: episode.description,
  };
}

export default function EpisodePage({ params }: Props) {
  const episode = getEpisodeBySlug(params.slug);
  if (!episode) notFound();

  const { prev, next } = getAdjacentEpisodes(episode.id);

  return (
    <main className="episode-detail">
      {/* Back nav */}
      <div className="episode-detail-back">
        <Link href="/episodes" className="back-link">
          ← All Episodes
        </Link>
      </div>

      {/* Header */}
      <article className="episode-detail-article">
        <header className="episode-detail-header">
          <div className="episode-detail-meta">
            <span className="episode-number-badge">EP {episode.id}</span>
            <span className="episode-detail-date">{episode.date}</span>
            <span className="episode-dot">·</span>
            <span className="episode-detail-duration">{episode.duration}</span>
          </div>

          <h1 className="episode-detail-title">{episode.title}</h1>

          <div className="episode-detail-tags">
            {episode.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Listen buttons */}
          <div className="episode-listen-buttons">
            {episode.spotifyUrl ? (
              <a
                href={episode.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="listen-btn listen-btn--spotify"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Listen on Spotify
              </a>
            ) : (
              <a href="#" className="listen-btn listen-btn--spotify">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Listen on Spotify
              </a>
            )}
            {episode.appleUrl ? (
              <a
                href={episode.appleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="listen-btn listen-btn--apple"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Apple Podcasts
              </a>
            ) : (
              <a href="#" className="listen-btn listen-btn--apple">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Apple Podcasts
              </a>
            )}
          </div>
        </header>

        {/* Full show notes */}
        <section className="episode-detail-body">
          <h2>Show Notes</h2>
          {episode.fullDescription.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </section>

        {/* Key takeaways */}
        <section className="episode-detail-takeaways">
          <h2>Key Takeaways</h2>
          <ul>
            {episode.takeaways.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </section>
      </article>

      {/* Prev / Next navigation */}
      <nav className="episode-nav">
        {prev ? (
          <Link href={`/episodes/${prev.slug}`} className="episode-nav-link episode-nav-link--prev">
            <span className="episode-nav-dir">← Previous</span>
            <span className="episode-nav-title">EP {prev.id}: {prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link href={`/episodes/${next.slug}`} className="episode-nav-link episode-nav-link--next">
            <span className="episode-nav-dir">Next →</span>
            <span className="episode-nav-title">EP {next.id}: {next.title}</span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </main>
  );
}
