import 'bootstrap/dist/css/bootstrap.min.css';

function Column(props) {

    const deleteEl = (id) => {
        const newList = props.list.filter(el => el.id !== id);
        props.setList(newList);
    };


    return (
        <div className="container">
            <div>
                {props.list.filter(el => el.status === props.status).map(el =>
                    <div className="col" key={el.id}>
                        <div className="row">
                            {el.status === 'todo' && el.title}
                        </div>

                        <div className="row">
                            gfh
                        </div>
                        <div className="row">
                            Column
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default Column;