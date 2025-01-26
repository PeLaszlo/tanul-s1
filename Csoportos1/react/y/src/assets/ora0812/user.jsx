function Profile (user)
{return(
<div>
    <p>neme: {user.name}</p>
    <img src={user.url} alt="képaláírás" />
</div>
)
}
export default Profile