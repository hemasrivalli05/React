import { Fragment } from "react";

const TodoList = (props) => {
  console.log(props);
  let {items , handleDelete, handleUpdate} = props 

  return (
    <section className="todo"> 
    <h2>Courses</h2> 
    <table>
      <thead>
        <tr>
          <th>COURSE</th>
          <th>TRAINER</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {
          items.length > 0 && items.map((value)=>{   
            return (
              <Fragment key={value.id}>   
                  <tr>
                     <td>{value.course}</td>  
                     <td>{value.trainer}</td>
                     <td>
                      <button onClick={()=>handleUpdate(value.id)}>Edit</button>
                      <button onClick={()=>handleDelete(value.id)}>Delete</button>
                     </td>
                  </tr>
              </Fragment>
            )
          })
        }
      </tbody>
    </table>
    </section>
  )
}

export default TodoList