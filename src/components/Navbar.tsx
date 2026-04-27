"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Main Character Money"
            width={200}
            height={50}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              pathname === "/"
                ? "text-sage"
                : "text-foreground hover:text-sage"
            }`}
          >
            Home
          </Link>
          <Link
            href="/episodes"
            className={`text-sm font-medium transition-colors ${
              pathname === "/episodes"
                ? "text-sage"
                : "text-foreground hover:text-sage"
            }`}
          >
            Episodes
          </Link>
          <Link
            href="/teen-money-method"
            className={`text-sm font-medium transition-colors ${
              pathname === "/teen-money-method"
                ? "text-terracotta"
                : "text-foreground hover:text-terracotta"
            }`}
          >
            Teen Money Method
          </Link>
        </div>
      </div>
    </nav>
  );
}
