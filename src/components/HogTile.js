import { useState } from "react";
import HogDetails from "./HogDetails";

function HogTile({hog}){
    const [seeDetails, setSeeDetails] = useState(false)
    
    function handleDetails(){
        setSeeDetails(!seeDetails)
    }

    return (
        <div className="pigTile" onClick={handleDetails}>
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.name}></img>
            {seeDetails? <HogDetails hog={hog}/> : ''}
        </div>
    )
}

export default HogTile;