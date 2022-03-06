import {Link} from 'react-router-dom'

function NavBar() {

    return <>

        <div>
            <Link to = '/'> Home </Link>
            <br/>
            <Link to = '/scoresInserted'> Scores lists </Link>
            <br/>
            <Link to = '/formScores'> Score form </Link>
            <br/>
            <Link to = '/formScoresFiltered'> Score form filtered </Link>
            <br/>
            <Link to = '/formLogUser'> User log </Link>
            <br/>
            <Link to = '/deleteAllScores'> Delete all scores </Link>
            {localStorage.getItem('tokenLogin') && <p>Logged</p>}
        </div>


    </>
}

export default NavBar;