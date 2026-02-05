"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const companyName = "BELF";
  const launchDate = new Date("2026-06-15T00:00:00"); 

  const [visibleCount, setVisibleCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
  const [showSubtext, setShowSubtext] = useState(false);

  function getTimeRemaining() {
    const now = new Date().getTime();
    const diff = launchDate.getTime() - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  // BELF glide animation
  useEffect(() => {
    if (visibleCount < companyName.length) {
      const t = setTimeout(() => setVisibleCount((v) => v + 1), 300);
      return () => clearTimeout(t);
    } else {
      setTimeout(() => setShowSubtext(true), 600);
    }
  }, [visibleCount]);

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w3-display-container w3-animate-opacity w3-text-white"
      style={{
        backgroundImage: "url('/images/back2.jpeg')",
        minHeight: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        fontFamily: "'Raleway', sans-serif",
      }}
    >
      {/* Fonts + W3 */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Raleway"
      />
      <link
        rel="stylesheet"
        href="https://www.w3schools.com/w3css/5/w3.css"
      />

      {/* CENTER CONTENT */}
      <div className="w3-display-middle text-center">
        {/* BELF */}
        <div className="flex justify-center">
          {companyName.split("").map((char, i) => (
            <span
              key={i}
              style={{
                opacity: i < visibleCount ? 1 : 0,
                transform:
                  i < visibleCount ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s ease",
                fontSize: "6rem",
                letterSpacing: "0.35em",
                fontWeight: 600,
                textShadow: "0 0 30px rgba(255,255,255,0.5)",
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Divider UNDER BELF */}
        {showSubtext && (
          <hr
            className="mx-auto my-10 animate-divider"
            style={{
              width: "90%", // ← slightly longer now
              border: "0.5px solid rgba(255,255,255,0.6)",
              boxShadow: "0 0 12px rgba(255,255,255,0.4)",
            }}
          />
        )}

        {/* Coming soon + countdown */}
        {showSubtext && (
          <div className="animate-fadeUp">
            <h2 className="text-2xl tracking-widest mb-8">
              COMING SOON
            </h2>

            <div className="flex justify-center gap-12 text-xl tracking-widest">
              <TimeBlock label="DAYS" value={timeLeft.days} />
              <TimeBlock label="HOURS" value={timeLeft.hours} />
              <TimeBlock label="MIN" value={timeLeft.minutes} />
              <TimeBlock label="SEC" value={timeLeft.seconds} />
            </div>
          </div>
        )}
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-fadeUp {
          animation: fadeUp 1s ease forwards;
        }

        .animate-divider {
          animation: dividerGrow 0.9s ease forwards;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes dividerGrow {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 90%; /* ← slightly longer animation */
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

/* Countdown block */
function TimeBlock({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="text-4xl font-semibold">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-sm opacity-70 mt-1">{label}</div>
    </div>
  );
}
