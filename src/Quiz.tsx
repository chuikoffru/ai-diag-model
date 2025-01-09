import { useState } from "react"
import { IQuizData } from "./types"

interface QuizProps {
    quizData: IQuizData
    onRestart: () => void
  }
  const Quiz: React.FC<QuizProps> = ({ quizData, onRestart }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState<(string | null)[]>(
      Array(quizData.questions.length).fill(null)
    )
    const [animationDirection, setAnimationDirection] = useState<'forward' | 'backward' | 'none'>('none')
  
    const handleOptionSelect = (letter: string) => {
      const newAnswers = [...answers]
      newAnswers[currentQuestionIndex] = letter
      setAnswers(newAnswers)
    }
  
    const handleNext = () => {
        if (currentQuestionIndex < quizData.questions.length - 1) {
            setAnimationDirection('forward')
            setCurrentQuestionIndex((prev) => prev + 1)
          } else {
            // Переходим "за последний вопрос", чтобы сработала логика показа результата
            setCurrentQuestionIndex(quizData.questions.length)
          }
    }
  
    const handlePrev = () => {
      if (currentQuestionIndex > 0) {
        setAnimationDirection('backward')
        setCurrentQuestionIndex((prev) => prev - 1)
      }
    }
  
    const restart = () => {
      setAnswers(Array(quizData.questions.length).fill(null))
      setCurrentQuestionIndex(0)
      setAnimationDirection('none')
      onRestart() // вернуться к экрану выбора персоны (или вообще к Intro)
    }
  
    if (currentQuestionIndex >= quizData.questions.length) {
      // Подсчёт результатов
      const tally: Record<string, number> = {}
      answers.forEach((letter) => {
        if (letter) {
          tally[letter] = (tally[letter] || 0) + 1
        }
      })
      let maxCount = 0
      let mostFrequentLetter = 'A'
      for (const letter in tally) {
        if (tally[letter] > maxCount) {
          maxCount = tally[letter]
          mostFrequentLetter = letter
        }
      }
      const result = quizData.resultsMap[mostFrequentLetter] || ''
  
      return (
        <div className="quiz-container">
          <h2>Результат</h2>
          <img src={result.image} width={300} />
          <p style={{ whiteSpace: 'pre-line' }}>{result.desc}</p>
          <button onClick={restart}>Пройти заново</button>
        </div>
      )
    }
  
    const currentQuestion = quizData.questions[currentQuestionIndex]
    const progressPercent = ((currentQuestionIndex + 1) / quizData.questions.length) * 100
  
    return (
      <div className="quiz-container">
        {/* Прогресс-бар */}
        <div className="progress-bar-wrapper">
          <div
            className="progress-bar-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
  
        <div
        key={currentQuestionIndex}
          className={`question-slide ${
            animationDirection === 'forward'
              ? 'slide-forward'
              : animationDirection === 'backward'
              ? 'slide-backward'
              : ''
          }`}
        >
          <h2>{quizData.title}</h2>
          <div className="question-block">
            <p className="question-text">
              <strong>{currentQuestion.question}</strong>
            </p>
            <ul className="options-list">
              {currentQuestion.options.map((option) => {
                const isSelected = answers[currentQuestionIndex] === option.letter
                return (
                  <li key={option.letter} className="option-item">
                    <button
                      className={`option-button ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleOptionSelect(option.letter)}
                    >
                      {option.label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
          <p>
            Вопрос {currentQuestionIndex + 1} из {quizData.questions.length}
          </p>
        </div>
  
        <div className="navigation-buttons">
          <button onClick={handlePrev} disabled={currentQuestionIndex === 0}>
            Назад
          </button>
          <button
            onClick={handleNext}
            disabled={!answers[currentQuestionIndex]}
          >
            Вперёд
          </button>
        </div>
      </div>
    )
  }

  export default Quiz;