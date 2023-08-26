import Memo from "../funtions/Memo";
import { useState } from "react";

const Blogs = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    const incremenettudos = () => {
        var newtodus2 = [...todos, "data" + todos.length];
        setTodos(newtodus2)
    }

    return (
        <>
            <Memo variable={todos} />
            <hr />
            <div>
                Count: {count}
                <button onClick={incremenettudos}>+</button>
            </div>
        </>
    );
};

export default Blogs