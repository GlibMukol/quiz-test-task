import { TOnHandleDone, TOnNextQuiz } from "../types"

const Navigate = (
    { nextQuiz, prevQuiz, disablePrev, done, handleDone }:
        { nextQuiz: TOnNextQuiz, prevQuiz: TOnNextQuiz, disablePrev: boolean, done: boolean, handleDone: TOnHandleDone }) => {
    return (
        <div>
            <button disabled={disablePrev} onClick={() => prevQuiz()} >&lt; prev </button>
            {
                done ?
                    (<button onClick={() => { handleDone() }}> Done</button>) :
                    (<button onClick={() => { nextQuiz() }} > next &gt;</button>)
            }
        </div>
    )
}
export default Navigate