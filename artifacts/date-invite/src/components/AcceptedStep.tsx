import { useState, useEffect } from "react";

interface Props {
  onPickDate: () => void;
}

export default function AcceptedStep({ onPickDate }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className={`card ${mounted ? "card-enter" : ""}`}>
      <div className="big-icon">✅</div>
      <h1 className="title">WAIT YOU ACTUALLY SAID YES?? 🤭</h1>
      <p className="subtitle" style={{ marginTop: "12px" }}>I knew you liked me back :)</p>
      <button className="btn-yes" style={{ marginTop: "28px" }} onClick={onPickDate}>
        pick a date 💗
      </button>
    </div>
  );
}
