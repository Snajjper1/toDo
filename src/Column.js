function Column(props) {

    const deleteEl = (id) => {
        const newList = props.list.filter(el => el.id !== id);
        props.setList(newList);
    };


    return (
        <div>

            {props.list.filter(el => el.status === props.status).map(el =>
                <li key={el.id}>
                    {props.status === 'progress' && <button disabled>Move to To Do</button>}
                    {props.status === 'done' && <button disabled>Move to Progress</button>}
                    {el.title} {el.status}
                    <button onClick={() => deleteEl(el.id)}>Delete</button>
                    {props.status === 'todo' && <button disabled> Move to progress</button>}
                    {props.status === 'progress' && <button disabled>Move to Done</button>}
                </li>
            )}

            <hr/>
        </div>
    )
}

export default Column;