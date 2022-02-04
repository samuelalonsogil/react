import {useState} from "react";

export default function BuscadorPrueba(){

    const USERS = [
        { id: 1, name: 'Andy', age: 32 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Tom Hulk', age: 40 },
        { id: 4, name: 'Tom Hank', age: 50 },
        { id: 5, name: 'Audra', age: 30 },
        { id: 6, name: 'Anna', age: 68 },
        { id: 7, name: 'Tom', age: 34 },
        { id: 8, name: 'Tom Riddle', age: 28 },
        { id: 9, name: 'Bolo', age: 23 },
    ];

    const [name, setName] = useState('');
    const [foundUsers, setFoundUsers] = useState(USERS);

    let filterName = (element) =>{

        let key = element.target.value;
        if ( key !== '' || key!= null){
            let newArray = USERS.filter( (user) => user.name.toLowerCase().startsWith(key.toLowerCase() ) );
            setFoundUsers(newArray);
        }else {
            setFoundUsers(USERS);
        }
        setName(key);
    };

    function preventDefault(element){
        element.preventDefault();
    }

    return ( <div>
        <form onSubmit={preventDefault}>
            <label>
                <input type="text" value={name} onChange={filterName}/>
            </label>
        </form>

            <div>
                {foundUsers && foundUsers.length > 0 ? (
                    foundUsers.map( (user) => (
                        <ul key={user.id}>
                            <p>{user.id}</p>
                            <p>{user.name}</p>
                            <p>{user.age} year old</p>
                        </ul>
                    ))) : <h1>No results found</h1>

                }
            </div>
    </div>


    )
}