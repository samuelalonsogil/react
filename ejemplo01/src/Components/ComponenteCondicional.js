export default function ComponenteCondicional(){
    const isAdmin = true;
    return isAdmin?<Admin/>:<User/>;
}

function Admin(){
    return <p>Soy el admin</p>;
}

function User(){
    return <p>Soy un user</p>;
}