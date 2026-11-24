"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layers, Pause, Play } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldShowVideo, setShouldShowVideo] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion and Save-Data
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const connection = (navigator as unknown as { connection?: { saveData?: boolean } })
      .connection;
    const saveData = connection?.saveData ?? false;

    // Also skip video on very small screens (< 640px)
    const isSmallScreen = window.innerWidth < 640;

    setShouldShowVideo(!prefersReduced && !saveData && !isSmallScreen);
  }, []);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const { heroVideo } = siteConfig;

  return (
    <section
      className="relative w-full overflow-hidden flex items-end justify-center"
      style={{
        height: "min(calc(100svh - var(--header-height)), 820px)",
        minHeight: "560px",
      }}
    >
      {/* Video / Poster background */}
      <div className="absolute inset-0 z-0">
        {/* Poster image (always present for LCP and fallback) */}
        <Image
          src={heroVideo.poster}
          alt="MECFORGE aluminium piston foundry and manufacturing"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Video layer */}
        {shouldShowVideo && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroVideo.poster}
            onLoadedData={() => setVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src={heroVideo.webm} type="video/webm" />
            <source src={heroVideo.mp4} type="video/mp4" />
          </video>
        )}

        {/* Ken Burns effect for poster-only mode */}
        {!shouldShowVideo && (
          <div
            className="absolute inset-0 animate-slow-zoom"
            style={{
              backgroundImage: `url(${heroVideo.poster})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
      </div>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.50) 40%, rgba(0,0,0,0.80) 100%)",
        }}
      />

      {/* Warm vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(30,10,0,0.3) 100%)",
        }}
      />

      {/* Content (positioned in lower half) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* H1 */}
          <h1
            className="font-display font-extrabold uppercase text-white tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
          >
            Precision Aluminium
            <br />
            Piston Manufacturing
          </h1>

          {/* Subtext */}
          <p className="text-gray-200 text-base sm:text-lg lg:text-xl max-w-[760px] mx-auto leading-relaxed">
            Gravity die-cast aluminium pistons for diesel and oil engines
            — melting, casting, CNC machining and inspection, all under
            one roof in Rajkot, India.
          </p>

          {/* Two buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-brand-accent hover:bg-brand-accent-hover rounded shadow-btn-accent transition-all duration-300 focus-ring"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider text-white border-2 border-white/80 hover:bg-white/10 rounded transition-all duration-300 focus-ring"
            >
              <Layers className="w-4 h-4" />
              <span>Explore Products</span>
            </Link>
          </div>

          {/* Tagline */}
          <p className="font-script text-lg sm:text-xl lg:text-2xl text-white/80 italic pt-2">
            {siteConfig.tagline}
          </p>
        </div>
      </div>

      {/* Pause/Play button */}
      {shouldShowVideo && (
        <button
          onClick={togglePlayPause}
          type="button"
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
          className="absolute bottom-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white transition-colors focus-ring"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </button>
      )}

      <style jsx>{`
        @keyframes slow-zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.08);
          }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}
