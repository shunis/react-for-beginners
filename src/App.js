import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
    return (
        <Router>
            <Routes>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
            </Routes>
            <Routes>
                <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />} />
            </Routes>
            <Routes>
                <Route path="/hello" element={<h1>Hello</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
