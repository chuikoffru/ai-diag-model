interface IntroScreenProps {
  onNext: () => void
}
const IntroScreen: React.FC<IntroScreenProps> = ({ onNext }) => {
  return (
    <div className="intro-screen quiz-container">
      <h1>Узнай - какая ты модель искусственного интеллекта?</h1>
      <img src="/intro-image.png" alt="Intro" style={{ maxWidth: '100%', margin: '20px 0' }} />
      <p>Пройти тест из 10 вопросов и узнай, на какую модель искусственного интеллекта Вы похожи.</p>
      <button onClick={onNext}>Продолжить</button>
    </div>
  )
}

export default IntroScreen