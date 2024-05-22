import './App.css'
import Question from './components/Question';
import Varians from './components/Varians';
import Navigate from './components/Navigate';
import { Quiz } from './quiz';
import { useState } from 'react';
import { TAnswers, TQuiz } from './types';
import Results from './components/Results';


// function 

function App() {
  const [quizIdx, setQuiz] = useState(0);
  const [answers, setAnswers] = useState<Array<TAnswers>>([]);
  const [finish, setFinish] = useState(false);
  const [result, setResult] = useState(0);
  const lengthQuiz = Quiz.length;

  const handleSwitchInc = () => {
    setQuiz(quizIdx => quizIdx + 1)
  }

  const handleSwitchDec = () => {
    setQuiz(quizIdx => quizIdx - 1)
  }


  const handleSelect = (quiz: TQuiz, item: number) => {

    const selected = {
      ...quiz,
      checked: item
    }

    const indexQuizInAnswer = answers.findIndex(item => item.id === quiz.id);
    const isExistQuizInAnswers = indexQuizInAnswer !== -1;

    isExistQuizInAnswers ? setAnswers([...answers.splice(indexQuizInAnswer, 1, selected)]) : setAnswers([...answers, selected])

  }

  const handleClickDone = () => {
    setFinish(true);
    const countRightAnswers = answers.reduce((acc: number, val: TAnswers) => {
      if (val.answer === val.checked) {
        return acc + 1;
      }
      return acc;
    }, 0);

    const quizLength = Quiz.length;
    const result = Math.floor((countRightAnswers / quizLength) * 100);
    setResult(result)
  }
  return (
    <div className='container'>
      <Question quistion={Quiz[quizIdx].question} />
      {finish ?
        (<Results result={result} />) :
        (
          <>
            <Varians quiz={Quiz[quizIdx]} handleSelectVariant={handleSelect} />
            <Navigate
              nextQuiz={handleSwitchInc}
              prevQuiz={handleSwitchDec}
              done={quizIdx === lengthQuiz - 1}
              disablePrev={quizIdx === 0}
              handleDone={handleClickDone}
            />
          </>

        )
      }

    </div>
  )
}

export default App
