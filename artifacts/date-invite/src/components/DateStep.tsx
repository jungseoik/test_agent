import { useState, useEffect } from "react";

interface Props {
  selectedDate: string;
  setSelectedDate: (v: string) => void;
  selectedTime: string;
  setSelectedTime: (v: string) => void;
  onNext: () => void;
}

const TIMES = [
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM",
];

export default function DateStep({ selectedDate, setSelectedDate, selectedTime, setSelectedTime, onNext }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const canProceed = selectedDate && selectedTime;

  return (
    <div className={`card ${mounted ? "card-enter" : ""}`}>
      <div className="big-icon">📅🐾</div>
      <h1 className="title" style={{ fontSize: "28px" }}>So... when are you free?</h1>

      <div className="form-group">
        <label className="form-label">Pick a Day 📅</label>
        <input
          type="date"
          className="form-input"
          value={selectedDate}
          onChange={e => setSelectedDate(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label">What Time? ⏰</label>
        <select
          className="form-input"
          value={selectedTime}
          onChange={e => setSelectedTime(e.target.value)}
        >
          <option value="">Select a time...</option>
          {TIMES.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <button
        className="btn-yes btn-full"
        onClick={onNext}
        disabled={!canProceed}
        style={{ opacity: canProceed ? 1 : 0.5, cursor: canProceed ? "pointer" : "not-allowed" }}
      >
        set the date! ♥
      </button>
    </div>
  );
}
