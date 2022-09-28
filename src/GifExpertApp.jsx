import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['ojete', 'calor'])

  const onAddCategory = newCategory => {
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={setCategories}
        onAddCategory={ onAddCategory }  
      />

      {
        categories.map(category => 
          <GifGrid
            key={ category }
            category={ category }
          />
        )
      }
    </>
  )
}

export default GifExpertApp