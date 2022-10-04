import React from 'react'
import "./InputFieldStyles.css"

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField = ({ todo, setTodo }: Props) => {
  return (
    <form action="" className='input'>
        <input className="input__box" type="input" placeholder="Enter a task" />
        <button className="input__submit" type='submit'>GO</button>
    </form>
  )
}

export default InputField