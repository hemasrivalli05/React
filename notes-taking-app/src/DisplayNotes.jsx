import React, { useContext } from 'react'
import { TaskContextApi } from './TaskProvider'

const DisplayNotes = () => {

  let data = useContext(TaskContextApi)
  console.log("context-data", data)

  let { task, handleCategory, selective , handleUpdate , handleDelete} = data

  let { selectedCategory } = selective
  console.log("selected category", selectedCategory)

  return (
    <main className='displaySection'>
      <section className="selectedNotes">
        <div className="selectDisplayBlock" value={selectedCategory} onChange={handleCategory}>
          <label>Select a Category</label>
          <input type="radio" name='selectedCategory' value="all" /><span>All</span>
          <input type="radio" name='selectedCategory' value="general" /><span>General</span>
          <input type="radio" name='selectedCategory' value="official" /><span>Official</span>
          <input type="radio" name='selectedCategory' value="technical" /><span>Technical</span>
        </div>

        <section className="displayBlock">
          <div className="displayNotes">
            {
              task.length == 0 ? "Please add notes..." : task.map((value) => {
                return selectedCategory == "all" ? (
                  <div className="output" key={value.id}>
                    <h1>Title : {value.title} </h1>
                    <p> Description : {value.description}</p>
                    <p>Category : {value.category}</p>
                    <div className="btn">
                      <button onClick={()=> handleUpdate(value.id)}>Update</button>
                      <button onClick={()=> handleDelete(value.id)}>Delete</button>
                    </div>
                  </div>
                ) : (
                  selectedCategory == value.category && (
                    <div className="output" key={value.id}>
                      <h1>Title : {value.title} </h1>
                      <p> Description : {value.description}</p>
                      <p>Category : {value.category}</p>
                      <div className="btn">
                      <button onClick={()=> handleUpdate(value.id)}>Update</button>
                      <button onClick={()=> handleDelete(value.id)}>Delete</button>
                    </div>
                    </div>
                  )
                )

              })
            }
          </div>

        </section>
      </section>
    </main>
  )
}

export default DisplayNotes