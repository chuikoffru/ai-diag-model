import {useEffect, useState} from "react";
import {quizzes} from "./quizzes"

interface IntroScreenProps {
  onNext: () => void
}

const images = Object.values(quizzes).flatMap((item) => Object.values(item.resultsMap))


const IntroScreen: React.FC<IntroScreenProps> = ({ onNext }) => {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setIdx(randomIndex)
    }, 3000);
  
    return () => {
      clearInterval(timer)
    }
  }, [setIdx])
  

  return (
    <div className="intro-screen quiz-container">
      <h1>Узнай - какая ты модель искусственного интеллекта?</h1>
      <img src={images[idx].image} style={{ maxWidth: '100%', margin: '20px 0' }} />
      <p>Пройти тест из 10 вопросов и узнай, на какую модель искусственного интеллекта Вы похожи.</p>
      <button onClick={onNext}>Продолжить</button>
    </div>
  )
}

export default IntroScreen