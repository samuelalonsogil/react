import {useState} from "react";

export default function DeleteAllScores(){
    const [disable, setDisable] = useState(false);

    const handleSubmit = async ( e ) => {
        e.preventDefault();

        let token01 = JSON.parse(localStorage.getItem('tokenLogin'));
        console.log(token01);

        try {
            const rawResponse = await fetch('http://localhost:5300/puntuacion/removeAll', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'auth-token': token01.token
                },
            });

            const content = await rawResponse.json();
            console.log(content);

            content.deletedCount === 0 ? setDisable(true) : setDisable(false);
            console.log(content.deletedCount);

        } catch (err) {
            alert('fail deleting');

        }
    }
        return <>

            <div>
                <h2>Delete all scores</h2>
                <form onSubmit={handleSubmit}>
                    <button type="submit" disabled={disable} onClick={handleSubmit}>delete all</button>
                </form>
            </div>

        </>


}

