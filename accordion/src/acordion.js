import React, { useState } from "react";



const Acordion = ({title, description}) => {
    const [down, setDown] = useState(false);

    return (
        <div className="container">
            <div className="titleContent">
                <div className="title">{title}</div>
                <div className="arrow" onClick={() => setDown(!down)}>{down ? "-" : "+"}</div>
            </div>

            <div className="desciptioncontent">
                {down && <div className="description">{description}</div>}
            </div>
        </div>
    );
}


export default Acordion;