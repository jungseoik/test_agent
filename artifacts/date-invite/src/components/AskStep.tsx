import { useRef, useState, useEffect } from "react";

interface Props {
  onYes: () => void;
}

export default function AskStep({ onYes }: Props) {
  const noRef = useRef<HTMLButtonElement>(null);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function moveNoButton() {
    const x = (Math.random() - 0.5) * 320;
    const y = (Math.random() - 0.5) * 200;
    setNoPos({ x, y });
  }

  return (
    <div className={`card ${mounted ? "card-enter" : ""}`}>
      <div className="avatar-wrapper">
        <img
          src="https://api.dicebear.com/7.x/fun-emoji/svg?seed=puppy&backgroundColor=b6e3f4,c0aede,d1d4f9"
          alt="cute pup"
          className="avatar"
        />
      </div>

      <h1 className="title">🌸 Will you go on a date with me? 🌸</h1>
      <p className="subtitle" style={{ marginTop: "8px" }}>I promise it'll be fun ✨</p>

      <div className="btn-row">
        <button className="btn-yes" onClick={onYes}>
          YES ♥
        </button>

        <div className="no-wrapper">
          <button
            ref={noRef}
            className="btn-no"
            onMouseEnter={moveNoButton}
            style={{
              transform: `translate(${noPos.x}px, ${noPos.y}px)`,
              transition: "transform 0.2s ease",
            }}
            onClick={moveNoButton}
          >
            no 🐾
          </button>
        </div>
      </div>
    </div>
  );
}
