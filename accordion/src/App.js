import React, { useState } from "react";

const App = () => {
    const data = {
        
            title: 'Acordion',
            description: "This is Data"
    };

    const {title, description} = data;

    const[down, setDown] = useState(false);

    return (
        <div className="Main">
            <h1>Acordion Demo</h1>
            <div className="container">
                <div className="titleContent">
                    <div className="title">{title}</div>
                    <div className="arrow" onClick={() => setDown(!down)}>{down ? "-" : "+"}</div>
                </div>

                <div className="desciptioncontent">
                    {
                    down &&
                    <div className="description">{description}</div>
                    }
                </div>
            </div>
        </div>
    );

}

export default App;