import Column from "./Column";
import {useState} from "react";

function App() {

    const statuses = ['todo', 'progress', 'done'];

    const initialList = [
        {
            id: 1,
            title: 'Learn JS',
            status: statuses[2]
        },
        {
            id: 2,
            title: 'Learn React',
            status: statuses[0],
        },
        {
            id: 3,
            title: 'Learn HTML',
            status: statuses[1],
        },
        {
            id: 4,
            title: 'Learn HTML5',
            status: statuses[2],
        },

    ]

    const [list, setList] = useState(initialList);

    const [inputTodo, setInputTodo] = useState(" ")

    const addToList = () => {
        const newTask = {
            id: Math.random(),
            title: inputTodo,
            status: statuses[0]
        }
        setList([...list, newTask]);
        setInputTodo("");
    }

    return (
        <div>
            <input type="text" value={inputTodo} onChange={event => setInputTodo(event.target.value)}/>
            <button onClick={addToList}>Add</button>
            {
                statuses.map(el => <Column key={el} list={list} setList={setList} status={el}/>)
            }
        </div>
    );
}

export default App;
