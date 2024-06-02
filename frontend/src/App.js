// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, AppBar, Typography, Toolbar, Button } from '@mui/material';
import Plot from 'react-plotly.js';

function App() {
    const [data, setData] = useState([]);  // Initialize as an empty array
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('/data')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setData(response.data);
                } else {
                    throw new Error("Unexpected response format");
                }
            })
            .catch(error => {
                setError(error.message || "An error occurred");
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Social Determinants of Health
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>
                Income vs Life Expectancy
            </Typography>
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
        </Container>
    );
}

export default App;
