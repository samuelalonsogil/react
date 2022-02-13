import {useState} from "react";
import SetColour from "./SetColour";

export default function GetColours(){

    const [colour, setColour] = useState('');

    let handleChange = (element) => {
        setColour(element.target.innerText);
    }

    return <div>
        <button onClick={handleChange}>red</button>
        <button onClick={handleChange}>blue</button>
        <button onClick={handleChange}>green</button>
        {colour && <SetColour color = {colour}/>}
    </div>;
}