import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BoxComponent from './BoxComponent';
import './style.css';
import ControlComponent from "./ControlComponent";
function App() {
    const [placeholders, setPlaceholders] = useState({
        first: 'first',
        second: 'second',
        third: 'third',
        forth: 'forth',
        fifth: 'fifth',
        sixth: 'sixth',
    });
    return (
        <Router>
            <div className="App">
                <ControlComponent placeholders={placeholders} setPlaceholders={setPlaceholders} />
            </div>
            <div className="container">
                <Routes>
                    <Route path="/:id/:color" element={<BoxComponent placeholders={placeholders} setPlaceholders={setPlaceholders} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
