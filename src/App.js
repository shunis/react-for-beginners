import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
    return (
        <Router>
            <Routes>
                <Route basename={process.env.PUBLIC_URL} path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route basename={process.env.PUBLIC_URL} path="/movie/:id" element={<Detail />} />
            </Routes>
            <Routes>
                <Route basename={process.env.PUBLIC_URL} path="/hello" element={<h1>Hello</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
