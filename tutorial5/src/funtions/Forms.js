import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        // event.preventDefault();
        alert(`The name you entered was: ${name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        console.log(e);
                    }}
                />
                <input type="submit" />
            </label>
        </form>
    )
}

export default MyForm