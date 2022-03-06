import {useState} from "react";

export default function LogUser(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);

    const handleSubmit = async ( e) =>{
        e.preventDefault();

            try{
                const rawResponse = await fetch( 'http://localhost:5300/user/login/', {
                    method: 'POST',
                    headers: {
                        'Accept':'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify( { email:email, password:password } )
                } );

                const content = await rawResponse.json();
                localStorage.setItem('tokenLogin', JSON.stringify(content));
                console.log(localStorage.getItem('tokenLogin') );
                setCheck(true);

            }catch (err){
                alert('fail logging');

            }

    }


    let handleChange = (e) => {
        const {name,value} = e.target;
        if (name==='email')setEmail(value);
        if (name==='password')setPassword(value);
    }

    return <>

        <div>

            <h2> Logg user </h2>
            <form onSubmit={handleSubmit}>
                <label> name:
                    <input name = 'email' value={email} onChange={handleChange}/>
                </label>

                <label> password:
                    <input name = 'password' value={password} onChange={handleChange} />
                </label>

                <br/>
                <input type='submit' value='login'/>
                <br/>

            </form>


        </div>

    </>

}

