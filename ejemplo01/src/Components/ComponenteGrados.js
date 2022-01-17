export default function ComponenteGrados(props){
return <p>EL valor en grados Fahrenheit es : {props.funcionGrados(10)}</p>
}

/*crea un componente al que le puedas pasar como prop un valor
* que represente  la temperatura en grados Cº. El componente pintará en pantalla en grados Fº*/