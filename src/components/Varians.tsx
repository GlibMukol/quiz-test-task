import { useState } from "react";
import { TOnSelectVariant, TQuiz } from "../types";

const Varians = ({ quiz, handleSelectVariant }: { quiz: TQuiz, handleSelectVariant: TOnSelectVariant }) => {
    const [selected, setSelected] = useState(-1);

    const handleSelect = (item: [number, number]) => {
        setSelected(item[1])
        handleSelectVariant(quiz, item[0])
    }

    return (
        <ul>
            {quiz.variant.map((item: [number, number]) =>
                <li
                    className={selected === item[1] ? "selected" : ""}
                    key={item[1]}
                    onClick={() => handleSelect(item)}
                >{item[0]}</li>)}

        </ul>
    )
}

export default Varians