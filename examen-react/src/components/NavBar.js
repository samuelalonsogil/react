import {Link} from 'react-router-dom';

export default function NavBar(){
    return <>

        <div>
            <ul>
                <li><Link to={'/'} >Home</Link></li>
                <li><Link to={'/fireBase'} >Firebase</Link></li>
                <li><Link to={'/formAudio'} >Audio transcription</Link></li>
            </ul>
        </div>
    </>
}