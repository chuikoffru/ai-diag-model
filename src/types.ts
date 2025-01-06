export interface IAnswerOption {
    label: string
    letter: string
  }
  
  export interface IQuestion {
    question: string
    options: IAnswerOption[]
  }
  
  export interface IQuizData {
    questions: IQuestion[]
    resultsMap: Record<string, string>
    title: string
  }