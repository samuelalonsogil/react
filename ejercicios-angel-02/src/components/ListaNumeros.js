import {useState} from "react";

export default function(){

    const [number, setNumber] = useState(undefined);
    const [arrayNumber, setArrayNumber] = useState([] );

    function handleSubmit(ev){
        ev.preventDefault();
        let newArrayNumbers = [...arrayNumber];
        newArrayNumbers.push(Number(number) );
        setArrayNumber(newArrayNumbers);
        console.log(arrayNumber);
    }

    let maxNumber = () =>Math.max(...arrayNumber);


    let media = () => {
        let sum = arrayNumber.reduce( (a, b) => a + b, 0);
        return sum/arrayNumber.length;
    }

    let deleteNumber = (idNum) => {
        let arrayModified = arrayNumber.filter( (element) => element!== idNum );
        setArrayNumber(arrayModified);
    }

   return <div>
       <form onSubmit={handleSubmit}>
           <label>
               <p>Number:</p>
               <input type="number" onChange={ (e)=>setNumber(e.target.value) } />
           </label>
       </form>
       {arrayNumber && arrayNumber.map((item) => {
           return (
               <div key={item}>
                   <p>{item}</p>
                   <button onClick={ () => deleteNumber(item) }>Borrar</button>
               </div>
           );
       })}

       {arrayNumber.length > 0 && (
           <div>
               <div>
                   <span>max number: {maxNumber()}</span>
               </div>
               <div>
                   <span>avg numbers: {media() }</span>
               </div>
           </div>
       )}

   </div>
}