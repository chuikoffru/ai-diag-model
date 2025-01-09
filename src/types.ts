export interface IAnswerOption {
    label: string
    letter: string
  }
  
  export interface IQuestion {
    question: string
    options: IAnswerOption[]
  }

  type Result = {
    desc: string;
    image: string;
  }
  
  export interface IQuizData {
    questions: IQuestion[]
    resultsMap: Record<string, Result>
    title: string
  }