import React from "react";
import Data from "./data";
import Acordion from "./acordion";

function createAcordion(Data){
    return (
        <Acordion
        title = {Data.title} 
        description = {Data.description}
        />
    );
};

const App = () => {
    return (
        <div className="Main">
            <h1>Acordion All Side Demo</h1>
            {Data.map(createAcordion)};
        </div>
    );

}

export default App;