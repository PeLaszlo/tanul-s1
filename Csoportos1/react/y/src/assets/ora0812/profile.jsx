function Profile({user})
{return(
    <div>
        <p>{user.name}</p>
        <img src={user.url} alt="tesztkép" />
    </div>
)}
export default Profile