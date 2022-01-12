import React, { useState } from "react";



const Acordion = ({ title, description }) => {
    const [down, setDown] = useState(false);
    const [up, setup] = useState(false);
    const [right, setright] = useState(false);
    const [left, setleft] = useState(false);

    return (
        <div className="container">
            <div className="topOpeneing">
                <button className="toparrow" onClick={() => setup(!up)}>{up ? "-" : "+"}</button>
                <div className="updesciptioncontent">
                    {up && <div className="description">{description}</div>}
                </div>
            </div>
            <div className="bottomopening">
                <div className="titleContent">
                    <div className="title"><button className="leftarrow" onClick={() => setleft(!left)}>{left ? "-" : "+"}</button>
                        {left && <span className="description">{description}</span>} 
                        {title} 
                        <button className="rightarrow" onClick={() => setright(!right)}>{right ? "-" : "+"}</button>
                        {right && <span className="description">{description}</span>}</div>
                    <button className="rightarrow" onClick={() => setDown(!down)}>{down ? "-" : "+"}</button>
                </div>

                <div className="desciptioncontent">
                    {down && <div className="description">{description}</div>}
                </div>
            </div>
        </div>
    );
}


export default Acordion;