import {useEffect, useState} from "react";
import {saveForm} from "../services/enviarDatos";

export default function FormAudio(){

    const [word, setWord] = useState('');
    const [words, setWords] = useState([]);
    const [phoneticTranslation01, setPhoneticTranslation01] = useState('');
    const [phoneticTranslation02, setPhoneticTranslation02] = useState('');
    const [phoneticTranslation03, setPhoneticTranslation03] = useState('');

    const [audio01, setAudio01] = useState('');
    const [audio02, setAudio02] = useState('');
    const [audio03, setAudio03] = useState('');

    const [found, setFound] = useState(false);
    const [date, setDate] = useState(new Date());



    useEffect( () => {
        async function apiCall(){
            const req = await fetch('http://localhost:5300/word');
            const data = await req.json();
            setWords(data.datos);
        }
        apiCall();
    } ,[])

    let handleSubmit = async e =>{
        e.preventDefault();

        try{
            const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
            const req = await fetch(url);
            const data = await req.json();

            console.log(data[0].phonetics[2].audio);


            data[0].phonetics[0].text===null?setPhoneticTranslation01(''):setPhoneticTranslation01(data[0].phonetics[0].text);
            data[0].phonetics[0].audio===null?setAudio01(''):setAudio01(data[0].phonetics[0].audio);

            data[0].phonetics[1].text===null?setPhoneticTranslation02(''):setPhoneticTranslation02(data[0].phonetics[1].text);
            data[0].phonetics[1].audio===null?setAudio02(''):setAudio02(data[0].phonetics[1].audio);

            data[0].phonetics[2].text===null?setPhoneticTranslation03(''):setPhoneticTranslation03(data[0].phonetics[2].text);
            data[0].phonetics[2].audio===null?setAudio03(''):setAudio03(data[0].phonetics[2].audio);

            setDate(date);

            console.log(audio03);
            setFound(true);

            await saveForm({word});
        }catch (err){
            alert('error'+ err);
            console.log(err);


            setFound(false);
        }

        const rawResponse = await fetch( 'http://localhost:5300/word/insertWord', {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { word:word, date:date } )
        } );

        const content = await rawResponse.json();
        console.log(content);
    }


    let deleteWord = (_idWord) => {
        let arrayModified = words.filter( (element) => element!== _idWord );
        setWords(arrayModified);
    }


    let handleChange = e =>{
        const {name,value}=e.target;
        name==='wordSearch'?setWord(value):alert('error');
    }

    return(
        <>

           <div className={'main'}>
               <div>
                   <img src={'https://us.123rf.com/450wm/chudtsankov/chudtsankov1703/chudtsankov170300122/74781548-risa-cara-divertida-de-dibujos-animados-con-expresi%C3%B3n-sonriente-ilustraci%C3%B3n-aislada-en-el-fondo-blan.jpg?ver=6'} />
               </div>

               <div>

                   <h3>Insert fonetic transcription</h3>
                   <form onSubmit={handleSubmit}>
                       <label>
                           Insert word to search <input type={'text'} value={word} name={'wordSearch'} onChange={handleChange}/>
                       </label>
                       <input type={'submit'} name={'button-search'} value={'search transcription'}/>
                   </form>


               </div>

               <br/>

               <div className= {"box"} >

                   <div >
                       {found && <span>{phoneticTranslation01}</span>}
                       <br/>

                       {found && <audio controls><source src={audio01} type={'audio/mpeg'}/></audio>}
                       <br/>
                   </div>

                   <br/>

                   <div className={"box"}>
                       {found && <span>{phoneticTranslation02}</span>}
                       <br/>
                       {found && <audio controls><source src={audio02} type={'audio/mpeg'}/></audio>}
                       <br/>
                   </div>

                   <br/>

                   <div className={"box"}>
                       {found && <span>{phoneticTranslation03}</span>}
                       <br/>
                       {found && <audio controls><source src={audio03} type={'audio/mpeg'}/></audio>}
                       <br/>
                   </div>

               </div>

               <div className={'lista'}>
                   <h3> Score lists </h3>
                   <ul>
                       { words.map(word => <li key = {word._id} > <span  >{word.word}</span>
                           <button onClick={ () => deleteWord(word) }>Borrar</button>
                       </li> ) }
                   </ul>
               </div>
           </div>

        </>
    )


}