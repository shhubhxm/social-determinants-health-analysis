import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/data').then(response => {
            setData(response.data);
        });
    }, []);

    return (
        <div>
            <h1>This is Test.</h1>
        </div>
    );
}

export default App;
