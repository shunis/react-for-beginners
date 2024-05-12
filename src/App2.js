import { useEffect, useState } from "react";

const Hello = () => {
    useEffect(() => {
        console.log("hi :)");
        return () => console.log("bye :(");
    }, []);

    return <h1>Hello World</h1>;
};

// function Hello() {
//     useEffect(() => {
//         console.log("i'm here");
//     }, []);
//     return <h1>Hello World</h1>;
// }

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            {showing ? <Hello /> : null}
            {/* {showing ? <Hello /> : null} */}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default App;
