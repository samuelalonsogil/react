
export default function SetColour(props){

    let styles = {backgroundColor:props.color, color:'white'};

    return <div>
    <p style={styles}>Color es {props.color}</p>
    </div>
}