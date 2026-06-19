import { useState } from "react";
import AskStep from "./components/AskStep";
import AcceptedStep from "./components/AcceptedStep";
import DateStep from "./components/DateStep";
import FoodStep from "./components/FoodStep";
import FinalStep from "./components/FinalStep";

type Step = "ask" | "accepted" | "date" | "food" | "final";

export default function App() {
  const [step, setStep] = useState<Step>("ask");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedFood, setSelectedFood] = useState("");

  return (
    <div className="app-bg">
      <div className="floating-hearts" aria-hidden="true">
        <span className="heart h1">♥</span>
        <span className="heart h2">🌸</span>
        <span className="heart h3">♥</span>
        <span className="heart h4">🌸</span>
        <span className="heart h5">♥</span>
      </div>

      {step === "ask" && <AskStep onYes={() => setStep("accepted")} />}
      {step === "accepted" && <AcceptedStep onPickDate={() => setStep("date")} />}
      {step === "date" && (
        <DateStep
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          onNext={() => setStep("food")}
        />
      )}
      {step === "food" && (
        <FoodStep
          selectedFood={selectedFood}
          setSelectedFood={setSelectedFood}
          onNext={() => setStep("final")}
        />
      )}
      {step === "final" && (
        <FinalStep
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          selectedFood={selectedFood}
        />
      )}
    </div>
  );
}
