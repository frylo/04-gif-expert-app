import { useState } from "react"


export const AddCategory = ({ onAddCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const onInpuntChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = e => {
    e.preventDefault()
    console.log(inputValue)
    if (inputValue.trim().length <= 1) return

    onAddCategory(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        name=""
        id=""
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={ onInpuntChange }
      />
    </form>
  )
}
