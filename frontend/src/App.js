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
            <Plot
                data={[
                    {
                        x: data.map(d => d.income),
                        y: data.map(d => d.life_expectancy),
                        type: 'scatter',
                        mode: 'markers',
                        marker: { color: 'red' },
                    },
                ]}
                layout={{ title: 'Income vs Life Expectancy' }}
            />
        </div>
    );
}

export default App;
