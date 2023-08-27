import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "GET",
            headers: {
                'authorization': 'BaseAuth W1lcmxsa='
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                alert("Error fatching data")
            })
            .then((data) => {
                console.log(data)
                setData(data);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    return (
        <>
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title}</p>;
                })}
        </>
    );
};

export default Home