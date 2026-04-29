import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="text-xl font-bold">Main Character Money</h3>
            <p className="text-gray-400 text-sm mt-1">
              Your money. Your story. Your rules.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Spotify
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Apple Podcasts
            </Link>
          </div>
        </div>
        <hr className="border-gray-600 my-8" />
        <p className="text-center text-gray-500 text-sm">
          &copy; 2026 Main Character Money. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
