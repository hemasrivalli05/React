import React, { useState } from 'react'

const TodoList = () => {

    //?at a time "inputData" stores only one value 
    let [inputData, setInputData] = useState("");//input field

    //?at a time  "items" stores multiple values
    let [items, setItems] = useState([])

    let [editIndex, setEditIndex] = useState(null);

    let addItems = () => {
        if (inputData === "") {
            alert("Please enter a task");
        } else if (editIndex !== null) {
            items[editIndex] = inputData;
            setEditIndex(null);
            setInputData("");
        } else {
            setItems([...items, inputData]);
            setInputData("");
        }
    };

    //here id parameter storing index no.of individual of item that we try to update
    let editItems = (id) => {
        console.log(id);
        console.log(items[id])
        setInputData(items[id]);
        setEditIndex(id);
    };

    //here id parameter storing index no.of individual of item that we try to delete
    let deleteItem = (id) => {
        console.log(id);
        console.log(items[id]);
        let updateItems = items.filter((val, index) => {
            return id !== index;
        })
        setItems(updateItems);
    }

    return (
        <>
            <section>
                <aside>
                    <h1>Welcome Todo List</h1>
                </aside>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Add Todo Item" value={inputData} onChange={(e) => setInputData(e.target.value)} />
                    <button onClick={addItems}>ADD</button>
                </form>
                <article>
                    {items.map((val, ind) => {
                        return (
                            <div key={ind}>
                                <span>{val}</span>
                                <button onClick={() => editItems(ind)}>EDIT</button>
                                <button onClick={() => deleteItem(ind)}>DELETE</button>
                            </div>
                        );
                    })}

                </article>
                <aside>
                    <button onClick={() => setItems([])}>Clear All</button>
                </aside>
            </section>
        </>
    )
}

export default TodoList