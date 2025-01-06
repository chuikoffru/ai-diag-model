import React, { useEffect, useState } from 'react'
import { quizIT, quizzes } from './quizzes'
import IntroScreen from './IntroScreen'
import PersonaScreen from './PersonaScreen'
import Quiz from './Quiz'


const App: React.FC = () => {
  // 0 = IntroScreen, 1 = PersonaScreen, 2 = Quiz
  const [screen, setScreen] = useState(0)
  const [persona, setPersona] = useState<string>('')

  // Считываем параметр person из URL
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const paramPerson = searchParams.get('person') // например, "mom" или "it"

    // Если этот параметр есть и он совпадает с ключом в quizzes — пропускаем экран выбора
    if (paramPerson && quizzes[paramPerson]) {
      // Сначала показываем Intro (screen=0),
      // а при нажатии «Продолжить» – сразу переходим к тесту (screen=2).
      setPersona(paramPerson)
    }
  }, [])

  const handleIntroNext = () => {
    // Если persona уже установлена (через URL), идём сразу на экран 2
    if (persona) {
      setScreen(2)
    } else {
      setScreen(1) // Иначе на экран выбора персоны
    }
  }

  const handleSelectPersona = (p: string) => {
    setPersona(p)
    setScreen(2) // К тесту
  }

  const handleRestartAll = () => {
    setPersona('')
    setScreen(0)
    // Можно почистить URL, если нужно:
    // window.history.replaceState({}, '', '/'); // обнулить query-параметры
  }

  return (
    <>
      {screen === 0 && <IntroScreen onNext={handleIntroNext} />}
      {screen === 1 && <PersonaScreen onSelectPersona={handleSelectPersona} />}
      {screen === 2 && (
        <Quiz
          quizData={quizzes[persona] || quizIT} // fallback, если вдруг нет ключа
          onRestart={handleRestartAll}
        />
      )}
    </>
  )
}

export default App

