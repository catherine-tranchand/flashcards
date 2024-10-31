"use client"; 


import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "愛",
    answer: "Love ❤️"
  },
  {
    id: 7336,
    question: "菜",
    answer: "Vegetable 🌽"
  },
  {
    id: 8832,
    question: "電腦",
    answer: "Computer 💻"
  },
  {
    id: 1297,
    question: "飯店",
    answer: "Restaurant 🍕"
  },
  {
    id: 9103,
    question: "寶貝",
    answer: "Baby 👶"
  },
  {
    id: 2002,
    question: "抱怨",
    answer: "Complain 😣"
  },

  {
    id: 2004,
    question: "冰激凌", 
    answer: "Ice Cream 🍦"
  },
    {
    id: 2005,
    question: "蛋糕",
    answer: "Cake 🍰"
    },
    {
    id: 2006,
    question: "词典",
    answer:  "Dictionary 📖"
    },

    {
     id: 2007,
     question: "电视",
     answer: "Television 📺"
    },

    {
      id: 2008,
      question: "開發人員",
      answer: "Developer 👩‍💻"
    }


];

function FlashCards() {
    const [selectedId, setSelectedId] = useState(null);
    
    function handleClick(id){
        setSelectedId(id != selectedId ? id : null);
    }

    return (
        <div className="flashcards">
            {questions.map((question) => (
              <div
                key={question.id}
                onClick={() => handleClick(question.id)}
                className={question.id === selectedId ? "selected" : ""}
                >
                <p>
                    {question.id === selectedId ? question.answer : question.question}
                </p>
                </div>
            ))}
            </div>
    );
}



