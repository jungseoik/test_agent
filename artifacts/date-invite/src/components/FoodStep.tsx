import { useState, useEffect } from "react";

interface Props {
  selectedFood: string;
  setSelectedFood: (v: string) => void;
  onNext: () => void;
}

const FOODS = [
  { name: "Pizza", emoji: "🍕" },
  { name: "Sushi", emoji: "🍣" },
  { name: "Burgers", emoji: "🍔" },
  { name: "Pasta", emoji: "🍝" },
  { name: "Tacos", emoji: "🌮" },
  { name: "Ramen", emoji: "🍜" },
];

export default function FoodStep({ selectedFood, setSelectedFood, onNext }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  function handleSelect(name: string) {
    setSelectedFood(name);
    setTimeout(() => {
      onNext();
    }, 400);
  }

  return (
    <div className={`card card-wide ${mounted ? "card-enter" : ""}`}>
      <h1 className="title" style={{ fontSize: "28px" }}>What are we feeling? 🍽️✨</h1>
      <p className="subtitle">pick your vibe</p>

      <div className="food-grid">
        {FOODS.map(food => (
          <button
            key={food.name}
            className={`food-card ${selectedFood === food.name ? "food-card-selected" : ""}`}
            onClick={() => handleSelect(food.name)}
          >
            <span className="food-emoji">{food.emoji}</span>
            <span className="food-name">{food.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
