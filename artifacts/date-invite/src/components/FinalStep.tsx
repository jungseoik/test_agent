import { useState, useEffect } from "react";

interface Props {
  selectedDate: string;
  selectedTime: string;
  selectedFood: string;
}

export default function FinalStep({ selectedDate, selectedTime, selectedFood }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className={`card ${mounted ? "card-enter" : ""}`} style={{ maxWidth: "660px" }}>
      <h1 className="title final-title">
        glad you didn't say no. be ready
        <br />
        by 6, I'm coming to get you 🚗
      </h1>

      {(selectedDate || selectedTime || selectedFood) && (
        <div className="date-summary">
          {selectedDate && <span>📅 {new Date(selectedDate + "T00:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</span>}
          {selectedTime && <span>⏰ {selectedTime}</span>}
          {selectedFood && <span>🍽️ {selectedFood}</span>}
        </div>
      )}

      <p className="subtitle final-ps">
        <em>
          P.S. normal people text. I made a website on Replit, during lunch, for you.
          <br />
          no big deal.
        </em>
      </p>

      <div className="hearts-row">♥ ♥ ♥ ♥ ♥</div>

      <a
        href="https://replit.com"
        target="_blank"
        rel="noopener noreferrer"
        className="replit-badge"
      >
        <span className="replit-dot">●</span>
        Built with Replit
      </a>
    </div>
  );
}
