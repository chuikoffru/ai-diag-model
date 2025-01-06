import { useState } from "react"


interface PersonaScreenProps {
  onSelectPersona: (personaKey: string) => void
}
const PersonaScreen: React.FC<PersonaScreenProps> = ({ onSelectPersona }) => {
  const [selected, setSelected] = useState<string>('')

  const handleSubmit = () => {
    if (selected) {
      onSelectPersona(selected)
    }
  }

  return (
    <div className="persona-screen quiz-container">
      <h2>Кто ты?</h2>
      <p>Выбери, к какой группе ты относишься:</p>

      <div className="persona-options">
        <label>
          <input
            type="radio"
            name="persona"
            value="it"
            onChange={(e) => setSelected(e.target.value)}
          />
          IT-специалист
        </label>
        <label>
          <input
            type="radio"
            name="persona"
            value="mom"
            onChange={(e) => setSelected(e.target.value)}
          />
          Мама в декрете
        </label>
        <label>
          <input
            type="radio"
            name="persona"
            value="school"
            onChange={(e) => setSelected(e.target.value)}
          />
          Школьник
        </label>
        <label>
          <input
            type="radio"
            name="persona"
            value="manager"
            onChange={(e) => setSelected(e.target.value)}
          />
          Руководитель
        </label>
      </div>

      <button onClick={handleSubmit} disabled={!selected}>
        Начать тест
      </button>
    </div>
  )
}

export default PersonaScreen