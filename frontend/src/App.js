import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

function App() {
    const [energyData, setEnergyData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/energy")
            .then(res => setEnergyData(res.data))
            .catch(err => console.error(err));
    }, []);

    const data = {
        labels: energyData.map(d => new Date(d.timestamp).toLocaleTimeString()),
        datasets: [{
            label: "Energy Consumption",
            data: energyData.map(d => d.energyUsage),
            borderColor: "blue",
            fill: false
        }]
    };

    return (
        <div>
            <h1>WelCome to Smart Home Energy Monitoring</h1>
            <Line data={data} />
        </div>
    );
}

export default App;

