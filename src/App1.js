import { useEffect, useState } from "react";
// import styles from "./App.module.css";
function App() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setCounter((prev) => prev + 1);
    const onChange = (e) => setKeyword(e.target.value);

    useEffect(() => {
        console.log("i run only once");
    }, []);
    useEffect(() => {
        if (keyword.length > 5 && keyword !== "") {
            console.log("Search for", keyword);
        }
    }, [keyword]);
    useEffect(() => {
        console.log("i run when counter changes");
    }, [counter]);
    return (
        <div>
            <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
            <h1>{counter}</h1>
            <button onClick={onClick}>Click me!!!</button>
        </div>
    );
}

export default App;
