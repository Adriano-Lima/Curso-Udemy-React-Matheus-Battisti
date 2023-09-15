import { useState, ChangeEvent } from 'react'

const State = () => {
    const [text, setText] = useState<string | null>()

    function handleChangetext(e:ChangeEvent<HTMLInputElement>) {
        setText(e.target.value)
    }
    return (
        <div>
            <p>O texto é: {text}</p>
            <input type="text" onChange={handleChangetext} />
        </div>
    )
}

export default State