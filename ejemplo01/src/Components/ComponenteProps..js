export default function ComponenteProps(props){
    return <ul>
        <li>{props.mensaje}</li>
        <li>{props.valor}</li>
        <li>{props.activo?'Verdadero':'Falso'}</li>
        <li>{props.array01.join(',')}</li>
        <li>{props.miFuncion(8)}</li>
        <li>{props.miJsx}</li>
        <li>{props.otroComponente}</li>
    </ul>
}