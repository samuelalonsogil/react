import {Button, Slider} from "@mui/material";

export default function MuiReactMaterial() {

    const showMsg = () => {
        alert('hola')
    }

    const handleChange = () => {

    }

    return <>
        <h1>Componente ejemplo mui</h1>
        <Button onClick={showMsg} variant="contained">Botón Mui</Button>
        <button onClick={showMsg}>Botón Normal</button>

        <Slider
            size="small"
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
            step={10}
            min={10}
            max={110}
            onChange={handleChange}
        />
    </>
}